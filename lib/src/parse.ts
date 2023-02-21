import { ASTNode, Field, Node } from './model';

export default function Parse(tokens: Node[]): ASTNode {
  let level = 1;
  let ast: ASTNode = {
    type: 'Resource',
    name: '',
    value: '',
    index: 0,
  };

  for (const token of tokens) {
    if (token.type === 'resource') {
      ast.type = 'Resource';
      ast.name = token.value;
    } else if (token.type === 'index') {
      ast.index = Number.parseInt(token.value);
    } else if (
      token.type === 'field' ||
      token.type === 'array' ||
      token.type === 'simpleArray'
    ) {
      ast.field = nestedField(ast.field, 1, level, token);
      level++;
    } else if (token.type === 'data') {
      ast.value = token.value;
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
      type: getType(token.type),
      name: token.value,
    };
  }

  field.field = nestedField(field.field, count + 1, level, token);

  return field;
}

function getType(type: Node['type']): Field['type'] {
  switch (type) {
    case 'field':
      return 'FlatField';
    case 'array':
      return 'MultipleFields';
    case 'simpleArray':
      return 'MultipleSimpleFields';
    default:
      break;
  }
}
