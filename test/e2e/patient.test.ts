import * as fs from 'fs';
import path from 'path';

import patientSingleIdentifier from './fixtures/result/0-patient.single.identifier.json';
import patientMultipleIdentifier from './fixtures/result/1-patient.multiple.identifier.json';
import patientMultipleName from './fixtures/result/2-patient.multiple.name.json';

import Compile from '../../src/main';
import { Patient } from 'fhir/r4';
describe('Patient e2e', () => {
  describe('identifier', () => {
    it('should set single identifer', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/0-patient.single.identifier.txt'
        )
      );
      let patient = Compile(file);

      expect(patient).toEqual(patientSingleIdentifier);
    });
    it('should set multiple identifer', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/1-patient.multiple.identifier.txt'
        )
      );
      let patient = Compile(file);

      expect(patient).toEqual(patientMultipleIdentifier);
    });
    it('should set multiple name', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/2-patient.multiple.name.txt')
      );
      let patient = Compile(file);

      expect(patient).toEqual(patientMultipleName);
    });
  });
});
