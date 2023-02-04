import * as fs from 'fs';
import path from 'path';

import patientSingleIdentifier from './fixtures/result/patient.single.identifier.json';
import Compile from '../../src/main';
import { Patient } from 'fhir/r4';
describe('Patient e2e', () => {
  describe('identifier', () => {
    it('should set single identifer', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/patient.single.identifier.txt'
        )
      );
      let patient = Compile(file);

      expect(patient).toEqual(patientSingleIdentifier);
    });
  });
});
