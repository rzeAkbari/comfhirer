import { Patient } from 'fhir/r4';
import evaluate from '../src/evaluate';
import { Node } from '../src/model';

describe('Evalute', () => {
  it('evalutes the base patient resource', () => {
    const ast: Node = { type: 'resource', value: 'Patient' };
    const expected: Patient = {
      resourceType: 'Patient',
    };

    const result = evaluate(ast);

    expect(result).toEqual(expected);
  });
});
