import { ASTNode } from '../src/model';
import { Tokenize } from '../src/tokenize';

describe('Tokenize', () => {
  it('should tokenize valid words', () => {
    const input = "Patient.birthDate='20-12-1988'";
    const expectToken: ASTNode[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'birthDate' },
      { type: 'data', value: '20-12-1988' },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should remove spaces', () => {
    const input = 'Patient .valid. key = "hi"';
    const expectToken: ASTNode[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'valid' },
      { type: 'field', value: 'key' },
      { type: 'data', value: 'hi' },
    ];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it('should tokenize brackets', () => {
    const input = 'Patient.name.[0].text="raz"';
    const expectToken: ASTNode[] = [
      { type: 'resource', value: 'Patient' },
      { type: 'field', value: 'name' },
      { type: 'array', value: '0' },
      { type: 'field', value: 'text' },
      { type: 'data', value: 'raz' },
    ];
    expect(Tokenize(input)).toEqual(expectToken);
  });
});
