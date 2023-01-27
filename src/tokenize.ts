import { getResourceType } from "./helper/regex";

export function Tokenize(input: string): string[] {
  let tokens = input.split(".");
  tokens = tokens.map((token: string) => token.trim());

  return tokens;
}
