import { ok, Result, Snippet } from "../../../snippet";
import { range } from "../../../span";
import { maybe, pattern, seq, tag } from "../../combinators";
import { NumberToken, numberToken } from "../../tokens";
import { AbstractCombinator } from "../base";

export default class SomeNumber extends AbstractCombinator<NumberToken> {
  readonly name = "NUMBER";

  invoke(input: Snippet): Result<[Snippet, NumberToken]> {
    return input.invoke(
      seq(
        "NUMBER",
        maybe(tag("-")),
        pattern(/^[0-9]+/, "digits"),
        maybe(
          seq(
            "decimal",
            tag("."),
            pattern(/^[0-9]+/, "digits")
          ).map(([, tail]) => ok(tail))
        )
      ).map(([negative, head, tail]) =>
        ok(
          numberToken(
            {
              head: head.span,
              tail: tail ? tail.span : null,
              negative: negative ? negative.span : null,
            },
            range(negative, head, tail ? tail : null)
          )
        )
      )
    );
  }
}
