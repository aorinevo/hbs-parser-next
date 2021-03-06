import * as qunit from "qunit";
import { config, module, test } from "qunit";
import {
  read,
  serializeRoot,
  b,
  SourceSpan,
  Err,
  a,
  parse,
} from "hbs-parser-next";

module("[READER] interpolation");

// Patch QUnit.assert with assert.tree
declare module "qunit" {
  interface Assert {
    tree(
      this: Assert,
      source: string,
      expectedRead: b.CurriedToken | b.CurriedToken[],
      expectedAst?: a.CurriedNode | a.CurriedNode[]
    ): void;
    readError(
      this: Assert,
      source: string,
      expected: { reason: string; span: SourceSpan }
    ): void;
  }

  interface Config {
    logging: true | undefined;
  }
}

qunit.assert.tree = function (
  source: string,
  expectedRead: b.CurriedToken | b.CurriedToken[],
  expectedAst?: a.CurriedNode | a.CurriedNode[]
) {
  let readStep = `read: ${source || "(empty)"}` || "(empty)";
  let parseStep = `parse: ${source || "(empty)"}` || "(empty)";

  let steps = [readStep];

  this.step(readStep);
  let tree = read(source, { logging: config.logging });

  let expectedTokens: b.CurriedToken[] = Array.isArray(expectedRead)
    ? expectedRead
    : [expectedRead];

  let { root: expectedRoot, source: expectedSource } = b.root(
    ...expectedTokens
  );

  let expectedString = serializeRoot(expectedRoot, expectedSource);

  if (tree.kind === "err") {
    this.ok(
      false,
      `expected tokens (${expectedString}), got error (${tree.reason})`
    );
  } else {
    let actualString = serializeRoot(tree.value, source);
    this.strictEqual(
      actualString,
      expectedString,
      "serialization of expected and actual match"
    );
    this.deepEqual(tree.value, expectedRoot, "token trees match");

    if (expectedAst) {
      if (qunit.equiv(tree.value, expectedRoot)) {
        steps.push(parseStep);
        this.step(parseStep);

        let expected: a.CurriedNode[] = Array.isArray(expectedAst)
          ? expectedAst
          : [expectedAst];

        let result = parse(tree.value, source);
        let ast = a.root(...expected);

        this.pushResult({
          result: result.kind === "ok",
          actual: result.kind,
          expected: "ok",
          message: `parse succeeded`,
        });

        if (result.kind === "ok") {
          this.deepEqual(result.value, ast.root);
        }
      }
    }
  }

  this.verifySteps(steps, "verified steps");
};

qunit.assert.readError = function (
  source: string,
  expected: { reason: string; span: SourceSpan }
) {
  let tree = read(source, { logging: config.logging });

  this.pushResult({
    result: tree.kind === "err",
    actual: tree.kind,
    expected: "err",
    message: `expected an error`,
  });

  isType<Err>(tree);

  this.pushResult({
    result: tree.reason === expected.reason,
    actual: tree.reason,
    expected: expected.reason,
    message: `reason matches`,
  });

  this.pushResult({
    result:
      tree.snippet.span.start === expected.span.start &&
      tree.snippet.span.end === expected.span.end,
    actual: `${tree.snippet.span.start}..${tree.snippet.span.end}`,
    expected: `${expected.span.start}..${expected.span.end}`,
    message: `span matches`,
  });
};

function isType<T>(_input: any): asserts _input is T {
  return;
}

test("empty", assert => {
  assert.tree("", []);
});

test("{{id}} interpolating an id", assert => {
  assert.tree(
    "{{identifier}}",
    [b.interpolate(b.id("identifier"))],
    [a.interpolate(a.varRef("identifier"))]
  );
  assert.tree("{{id}}", b.interpolate(b.id("id")));
  assert.tree("{{id-with-dash}}", b.interpolate(b.id("id-with-dash")));
});

test("{{id}} interpolating a string", assert => {
  assert.tree(`{{"hello"}}`, b.interpolate(b.str(`"hello"`)));
  assert.tree(`{{"hello world"}}`, b.interpolate(b.str(`"hello world"`)));
  assert.tree(`{{"hello\\"world"}}`, b.interpolate(b.str(`"hello\\"world"`)));
  assert.tree(`{{'hello'}}`, b.interpolate(b.str(`'hello'`)));
  assert.tree(`{{'hello world'}}`, b.interpolate(b.str(`'hello world'`)));
  assert.tree(`{{'hello\\'world'}}`, b.interpolate(b.str(`'hello\\'world'`)));
});

test("{{id}} interpolating a number", assert => {
  assert.tree("{{10}}", b.interpolate(b.int("10")));
  assert.tree("{{-10}}", b.interpolate(b.int("-10")));
  assert.tree("{{100.5123}}", b.interpolate(b.decimal("100.5123")));
  assert.tree("{{-100.5123}}", b.interpolate(b.decimal("-100.5123")));
});

test("{{(id)}} interpolating an expression", assert => {
  assert.tree("{{(id)}}", b.interpolate(b.sexp([b.id("id")])));
  assert.tree("{{ (id) }}", b.interpolate(b.sp, b.sexp([b.id("id")]), b.sp));
  assert.tree("{{( id )}}", b.interpolate(b.sexp([b.sp, b.id("id"), b.sp])));
  assert.tree(
    "{{ ( id ) }}",
    b.interpolate(b.sp, b.sexp([b.sp, b.id("id"), b.sp]), b.sp)
  );
});

test("{{@id}} interpolating an argument", assert => {
  assert.tree("{{@identifier}}", b.interpolate(b.arg("@identifier")));
  assert.tree("{{@id}}", b.interpolate(b.arg("@id")));
  assert.tree("{{@id-with-dash}}", b.interpolate(b.arg("@id-with-dash")));
});

test("whitespace around interpolation", assert => {
  assert.tree(
    "{{ identifier }}",
    b.interpolate(b.sp, b.id("identifier"), b.sp)
  );
  assert.tree("{{ id }}", b.interpolate(b.sp, b.id("id"), b.sp));
  assert.tree(
    "{{ id-with-dash }}",
    b.interpolate(b.sp, b.id("id-with-dash"), b.sp)
  );
});

test("paths", assert => {
  assert.tree(
    "{{id.with.path}}",
    b.interpolate(b.id("id"), b.dot, b.id("with"), b.dot, b.id("path"))
  );

  assert.tree(
    "{{ id.with.path }}",
    b.interpolate(
      b.sp,
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp
    )
  );

  assert.tree(
    "{{  id.with.path  }}",
    b.interpolate(
      b.ws("  "),
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.ws("  ")
    )
  );

  assert.tree(
    "{{@id.with.path}}",
    b.interpolate(b.arg("@id"), b.dot, b.id("with"), b.dot, b.id("path"))
  );

  assert.tree(
    "{{@dash-id.with-dashed.path}}",
    b.interpolate(
      b.arg("@dash-id"),
      b.dot,
      b.id("with-dashed"),
      b.dot,
      b.id("path")
    )
  );
});

test("{{id.with.path some other.stuff}}", assert => {
  assert.tree(
    "{{id.with.path some other.stuff}}",
    b.interpolate(
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.id("other"),
      b.dot,
      b.id("stuff")
    )
  );
});

test("named arguments", assert => {
  assert.tree(
    "{{id.with.path some named=args other=named.args}}",
    b.interpolate(
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.id("named"),
      b.eq,
      b.id("args"),
      b.sp,
      b.id("other"),
      b.eq,
      b.id("named"),
      b.dot,
      b.id("args")
    )
  );

  assert.tree(
    "{{id.with.path some @arg named=args other=@named.args}}",
    b.interpolate(
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.arg("@arg"),
      b.sp,
      b.id("named"),
      b.eq,
      b.id("args"),
      b.sp,
      b.id("other"),
      b.eq,
      b.arg("@named"),
      b.dot,
      b.id("args")
    )
  );
});

test("using all the features", assert => {
  assert.tree(
    "{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg yet-another=-12.5  }}",
    b.interpolate(
      b.ws("  "),
      b.sexp([
        b.id("id"),
        b.dot,
        b.id("with"),
        b.dot,
        b.id("path"),
        b.sp,
        b.id("some"),
        b.sp,
        b.arg("@arg"),
        b.sp,
        b.id("named"),
        b.eq,
        b.id("args"),
        b.sp,
        b.id("other"),
        b.eq,
        b.arg("@named"),
        b.dot,
        b.id("args"),
      ]),
      b.sp,
      b.arg("@some"),
      b.dot,
      b.id("arg"),
      b.sp,
      b.id("another"),
      b.dot,
      b.id("arg"),
      b.sp,
      b.id("named"),
      b.eq,
      b.arg("@arg"),
      b.sp,
      b.id("other"),
      b.eq,
      b.id("named"),
      b.dot,
      b.id("arg"),
      b.sp,
      b.id("yet-another"),
      b.eq,
      b.decimal("-12.5"),
      b.ws("  ")
    )
  );
});

test("two interpolations next to each other", assert => {
  assert.tree(
    "{{id.with.path some named=args other=named.args}}{{some.stuff}}",
    [
      b.interpolate(
        b.id("id"),
        b.dot,
        b.id("with"),
        b.dot,
        b.id("path"),
        b.sp,
        b.id("some"),
        b.sp,
        b.id("named"),
        b.eq,
        b.id("args"),
        b.sp,
        b.id("other"),
        b.eq,
        b.id("named"),
        b.dot,
        b.id("args")
      ),
      b.interpolate(b.id("some"), b.dot, b.id("stuff")),
    ]
  );
});

test("blocks", assert => {
  assert.tree("{{#if @x}}{{/if}}", b.block("if", [b.sp, b.arg("@x")]));

  assert.tree(
    "{{#if @x}}a b c {{#unless @y.z}}some stuff{{/unless}}{{/if}}",
    b.block(
      "if",
      [b.sp, b.arg("@x")],
      b.text("a b c "),
      b.block(
        "unless",
        [b.sp, b.arg("@y"), b.dot, b.id("z")],
        b.text("some stuff")
      )
    )
  );
});

test("blocks with block params", assert => {
  assert.tree(
    "{{#let @x as |x|}}insert {{x}}{{/let}}",
    b.block(
      "let",
      [b.sp, b.arg("@x"), b.sp, b.as("x")],
      b.text("insert "),
      b.interpolate(b.id("x"))
    )
  );

  assert.tree(
    "{{#let @x as |x| }}insert {{x}}{{/let}}",
    b.block(
      "let",
      [b.sp, b.arg("@x"), b.sp, b.as("x"), b.sp],
      b.text("insert "),
      b.interpolate(b.id("x"))
    )
  );

  assert.tree(
    "{{#let @x as |x|}}a b c {{#with @y.z as |z|}}some stuff{{/with}}{{/let}}",
    b.block(
      "let",
      [b.sp, b.arg("@x"), b.sp, b.as("x")],
      b.text("a b c "),
      b.block(
        "with",
        [b.sp, b.arg("@y"), b.dot, b.id("z"), b.sp, b.as("z")],
        b.text("some stuff")
      )
    )
  );
});

test("mismatched blocks", assert => {
  assert.readError("{{#if @x}}{{/unless}}", {
    reason: "mismatch",
    span: { start: 13, end: 19 },
  });
});
