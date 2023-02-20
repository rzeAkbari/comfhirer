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

  it('should suggest for field name telecome', () => {
    const suggestions = Intellisense('Patient.telecom.');
    expect(suggestions).toEqual([
      'period',
      'rank',
      'system',
      'use',
      'value',
      'extension',
      'id',
    ]);
  });
});
