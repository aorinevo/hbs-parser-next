import { Snippet } from "../snippet";
import Block from "./combinators/hbs/block";
import Interpolate from "./combinators/hbs/interpolate";
import SomeNumber from "./combinators/hbs/number";
import Sexp from "./combinators/hbs/sexp";
import SimplePath from "./combinators/hbs/simple-path";
import SpacedTokens from "./combinators/hbs/spaced-tokens";
import SomeString from "./combinators/hbs/string";
import SomeToken from "./combinators/hbs/token";
import type { CombinatorType } from "./combinators/types";
import Wrap from "./combinators/wrap";
import type { Debuggable } from "./logger";
import { Token, TokenType } from "./tokens";
export declare const token: <T extends TokenType.Identifier | TokenType.Dot | TokenType.Eq | TokenType.WS | TokenType.Text | TokenType.AttributeName>(c: CombinatorType<Snippet>, type: T) => SomeToken<T>;
export declare const wrap: <T extends Debuggable>(c: CombinatorType<T>) => Wrap<T>;
export declare const WS: SomeToken<TokenType.WS>;
export declare const STRING: SomeString;
export declare const NUMBER: SomeNumber;
export declare const SEXP: Sexp;
export declare const NAMED: import("./combinators/seq").default<[import("./tokens").IdentifierToken, import("./tokens").EqToken, import("./tokens").SexpToken | import("./tokens").StringToken | import("./tokens").NumberToken | import("./tokens").PresentTokens]>;
export declare const SIMPLE_PATH: SimplePath;
export declare const SPACED_TOKENS: SpacedTokens;
export declare const BLOCK: Block;
export declare const INTERPOLATE: Interpolate;
export declare const ID: SomeToken<TokenType.Identifier>;
export declare const DOT: SomeToken<TokenType.Dot>;
export declare const EQ: SomeToken<TokenType.Eq>;
export declare const ARG: CombinatorType<Token>;
export declare const EXPRESSION: import("./combinators/any").default<[import("./tokens").SexpToken, import("./tokens").PresentTokens, import("./tokens").StringToken, import("./tokens").NumberToken]>;
//# sourceMappingURL=hbs.d.ts.map