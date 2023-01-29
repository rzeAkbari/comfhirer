import { Patient } from 'fhir/r4';
import { patient } from './helper/fhirr4/resources/patient';
import { ASTNode, Field, Node } from './model';

export default function parse(tokens: Node[]): ASTNode {
  let level = 1;
  let ast: ASTNode = {
    type: 'Resource',
    name: '',
    value: '',
  };

  for (const token of tokens) {
    switch (token.type) {
      case 'resource':
        ast.type = 'Resource';
        ast.name = token.value;
        break;
      case 'field':
        ast.field = nestedField(ast.field, 1, level, token);
        level++;
        break;
      case 'data':
        ast.value = token.value;
      default:
        break;
    }
  }

  return ast;
}

function nestedField(
  field: Field,
  count: number,
  level: number,
  token: Node
): Field {
  if (count === level) {
    return {
      level,
      type: 'FlatField',
      name: token.value,
    };
  }

  field.field = nestedField(field.field, count + 1, level, token);

  return field;
}
