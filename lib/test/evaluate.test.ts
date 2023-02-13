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

  it('should give error when flat field is invalid', () => {
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
});
