export interface ASTNode {
  type: 'resource' | 'field' | 'data' | 'array';
  value: any;
}
