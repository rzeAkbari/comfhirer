import { Tokenize } from '../src/tokenize';
import ComfhirerError from '../src/comfhirerError';
describe('Error', () => {
  describe('Tokenize Error', () => {
    it('should throw when string value with no quotes', () => {
      const input = 'Patient.telecom.[0].rank=hi';
      expect(() => Tokenize(input)).toThrow('string without quotes');
    });

    it('should throw when key with numbers', () => {
      const input = 'Patient.telecom0.[0].rank="hi"';
      expect(() => Tokenize(input)).toThrow('key with number');
    });

    it('should throw when key with brackets', () => {
      const input = 'Patient.telecom[0].rank="hi"';
      expect(() => Tokenize(input)).toThrow('key with bracket');
    });

    it('should throw when key with brackets', () => {
      const input = 'Patient.telecom{0}.rank="hi"';
      expect(() => Tokenize(input)).toThrow('key with paranthesis');
    });
  });
});
