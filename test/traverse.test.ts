import { Patient } from 'fhir/r4';
import { ASTNode } from '../src/model';
import traverse from '../src/traverse';

describe('Travers', () => {
  it('should traverse simple resource', () => {
    const ast: ASTNode[] = [
      {
        type: 'Resource',
        name: 'Patient',
        value: '',
      },
    ];

    const expected: Patient[] = [
      {
        resourceType: 'Patient',
      },
    ];

    const fhirResource = traverse(ast);

    expect(fhirResource).toEqual(expected);
  });
});
