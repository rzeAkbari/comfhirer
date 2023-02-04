import { Node } from '../src/model';
import { Tokenize } from '../src/tokenize';

describe('Tokenize', () => {
  it('should tokenize string field', () => {
    const input = "Patient.birthDate='20-12-1988'";
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'birthDate' },
      { type: 'data', value: '20-12-1988' },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize boolean field', () => {
    const input = 'Patient.active=true';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'active' },
      { type: 'data', value: true },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize number field', () => {
    const input = 'Patient.telecom.[0].rank=1';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'telecom' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'rank' },
      { type: 'data', value: 1 },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize sub fields', () => {
    const input = "Patient.maritalStatus.code='M'";
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'maritalStatus' },
      { type: 'field', value: 'code' },
      { type: 'data', value: 'M' },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should remove spaces', () => {
    const input = 'Patient .valid. key = "hi"';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'valid' },
      { type: 'field', value: 'key' },
      { type: 'data', value: 'hi' },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize brackets', () => {
    const input = 'Patient.name.[0].text="raz"';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'name' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'text' },
      { type: 'data', value: 'raz' },
    ];
    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize graphs', () => {
    const input = 'Patient.name.[0].given.{1}="raz"';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'name' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'given' },
      { type: 'simpleArray', value: '1' },
      { type: 'data', value: 'raz' },
    ];
    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize codable concepts', () => {
    const input = 'Patient.maritalStatus.coding.[0].code="M"';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'maritalStatus' },
      { type: 'field', value: 'coding' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'code' },
      { type: 'data', value: 'M' },
    ];
    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize resource with multiple given name', () => {
    const input = 'Patient.name.[1].given.{1}="Peter"';
    const expectToken: Node[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'name' },
      { type: 'array', value: '1' },
      { type: 'field', value: 'given' },
      { type: 'simpleArray', value: '1' },
      { type: 'data', value: 'Peter' },
    ];
    expect(Tokenize(input)).toEqual(expectToken);
  });
});
