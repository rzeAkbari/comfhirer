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

    const parsed = parse(token);

    expect(ast).toEqual(parsed);
  });

  it('should parse node with number value', () => {
    const token: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'telecom' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'rank' },
      { type: 'data', value: 1 },
    ];

    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        level: 1,
        type: 'FlatField',
        name: 'telecom',
        field: {
          level: 2,
          type: 'MultipleFields',
          name: '0',
          field: {
            level: 3,
            type: 'FlatField',
            name: 'rank',
          },
        },
      },
      value: 1,
    };

    const parsed = parse(token);

    expect(ast).toEqual(parsed);
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

    const parsed = parse(token);

    expect(ast).toEqual(parsed);
  });

  it('should parse node with recursive sub field', () => {
    const token: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'maritalStatus' },
      { type: 'field', value: 'code' },
      { type: 'field', value: 'index' },
      { type: 'data', value: '1' },
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
          field: { level: 3, type: 'FlatField', name: 'index' },
        },
      },
      value: '1',
    };

    const parsed = parse(token);

    expect(ast).toEqual(parsed);
  });

  it('should parse codable concept', () => {
    const token: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'maritalStatus' },
      { type: 'field', value: 'coding' },
      { type: 'array', value: '0' },
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
          name: 'coding',
          field: {
            level: 3,
            type: 'MultipleFields',
            name: '0',
            field: { level: 4, type: 'FlatField', name: 'code' },
          },
        },
      },
      value: 'M',
    };

    const parsed = parse(token);

    expect(ast).toEqual(parsed);
  });

  it('should parse resource with multiple given name', () => {
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'name' },
      { type: 'array', value: '1' },
      { type: 'field', value: 'given' },
      { type: 'simpleArray', value: '1' },
      { type: 'data', value: 'Peter' },
    ];

    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        level: 1,
        type: 'FlatField',
        name: 'name',
        field: {
          level: 2,
          type: 'MultipleFields',
          name: '1',
          field: {
            level: 3,
            type: 'FlatField',
            name: 'given',
            field: {
              level: 4,
              type: 'MultipleSimpleFields',
              name: '1',
            },
          },
        },
      },
      value: 'Peter',
    };
  });
});
