export interface Node {
  type: 'resource' | 'field' | 'data' | 'array' | 'simpleArray';
  value: any;
}

export interface ASTNode {
  type: 'Resource';
  name: string;
  field?: Field;
  value: string | number;
}

export interface Field {
  level: number;
  type: 'FlatField' | 'MultipleFields' | 'MultipleSimpleFields';
  name: string;
  field?: Field;
}
