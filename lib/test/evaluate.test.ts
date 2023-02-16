import { Patient } from 'fhir/r4';
import evaluate from '../src/evaluate';
import { ASTNode, Node } from '../src/model';

describe('Evalute', () => {
  it('should fail when resource type not valid', () => {
    const ast: ASTNode = {
      type: 'Resource',
      name: 'NotValid',
      value: 1,
    };
    expect(() => evaluate(ast)).toThrowError('resource not supported');
  });

  it('should give error when level one flat field is invalid', () => {
    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        name: 'invalidKey',
        level: 1,
        type: 'FlatField',
      },
      value: 1,
    };

    expect(() => evaluate(ast)).toThrowError(
      'invalidKey not exists in type Patient'
    );
  });

  it('should give error when level two flat field is invalid', () => {
    const ast: ASTNode = {
      type: 'Resource',
      name: 'Patient',
      field: {
        name: 'telecom',
        level: 1,
        type: 'FlatField',
        field: {
          name: 'invalidKey',
          level: 2,
          type: 'FlatField',
        },
      },
      value: 1,
    };

    expect(() => evaluate(ast)).toThrowError(
      'invalidKey not exists in type Patient'
    );
  });

  it('should give error when multiple fileds flat field is invalid', () => {
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
            name: 'invalidKey',
          },
        },
      },
      value: 1,
    };

    expect(() => evaluate(ast)).toThrowError(
      'invalidKey not exists in type Patient'
    );
  });
});
