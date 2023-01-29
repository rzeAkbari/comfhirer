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

  it('should traverse simple resource with a flat field', () => {
    const ast: ASTNode[] = [
      {
        type: 'Resource',
        name: 'Patient',
        field: {
          level: 1,
          type: 'FlatField',
          name: 'birthDate',
        },
        value: '20-12-1988',
      },
    ];

    const expected: Patient[] = [
      {
        resourceType: 'Patient',
        birthDate: '20-12-1988',
      },
    ];

    const fhirResource = traverse(ast);

    expect(fhirResource).toEqual(expected);
  });
});
