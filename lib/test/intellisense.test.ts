import Intellisense from '../src/intellisense';

describe('Intellisense', () => {
  it('should suggest patient first level fields', () => {
    const suggestions = Intellisense('Patient.');
    expect(suggestions).toEqual([
      'active',
      'address',
      'birthDate',
      'communication',
      'contact',
      'deceasedBoolean',
      'deceasedDateTime',
      'gender',
      'generalPractitioner',
      'identifier',
      'link',
      'managingOrganization',
      'maritalStatus',
      'multipleBirthBoolean',
      'multipleBirthInteger',
      'name',
      'photo',
      'telecom',
      'contained',
      'extension',
      'modifierExtension',
      'text',
      'id',
      'implicitRules',
      'language',
      'meta',
    ]);
  });
  it('should not suggest for field name active', () => {
    const suggestions = Intellisense('Patient.active.');
    expect(suggestions).toEqual([]);
  });
});
