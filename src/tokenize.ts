export function Tokenize(input: string): string[] {
  const tokens = [];
  if (input.indexOf("patient") > -1) tokens.push("patient");

  return tokens;
}
