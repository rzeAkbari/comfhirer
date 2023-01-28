import { Patient } from 'fhir/r4';
import { ASTNode, Node } from '../src/model';
import parse from '../src/parse';

describe('parse', () => {
  it('should parse simple node', () => {
    const tokens: Node[] = [{ type: 'resource', value: 'Patient' }];

    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      value: '',
    };
    const parsed = parse(tokens);

    expect(parsed).toEqual(ast);
  });

  it('should parse node with field', () => {
    const token: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'birthDate' },
      { type: 'data', value: '20-12-1988' },
    ];

    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        level: 1,
        type: 'FlatField',
        name: 'birthDate',
      },
      value: '20-12-1988',
    };

    const expected = parse(token);

    expect(ast).toEqual(expected);
  });

  it('should parse node with sub field', () => {
    const token: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'maritalStatus' },
      { type: 'field', value: 'code' },
      { type: 'data', value: 'M' },
    ];

    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        level: 1,
        type: 'FlatField',
        name: 'maritalStatus',
        field: {
          level: 2,
          type: 'FlatField',
          name: 'code',
        },
      },
      value: 'M',
    };

    const expected = parse(token);

    expect(ast).toEqual(expected);
  });
});
