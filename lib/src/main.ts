import { ASTNode } from './model';
import Parse from './parse';
import { Tokenize } from './tokenize';
import traverse from './traverse';

export function Compile(input: Buffer | string) {
  const fhirExpressions = input.toString().split(/(?:\r\n|\r|\n)/g);
  const ast: ASTNode[] = [];
  for (let line = 0; line < fhirExpressions.length; line++) {
    const nodes = Tokenize(fhirExpressions[line]);
    ast.push(Parse(nodes));
  }
  return traverse(ast)[0];
}
