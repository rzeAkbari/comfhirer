import { Patient } from 'fhir/r4';
import { patient } from './helper/fhirr4/resources/patient';
import { ASTNode, Node } from './model';

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
        if (level > 1) {
          ast.field.field = {
            level,
            type: 'FlatField',
            name: token.value,
          };
          break;
        }
        ast.field = {
          level,
          type: 'FlatField',
          name: token.value,
        };
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

function nestedField(node: ASTNode['field']): ASTNode['field'] {
  node = node.field;
  return node;
}
