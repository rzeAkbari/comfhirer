import * as fs from 'fs';
import path from 'path';

import patientSingleIdentifier from './fixtures/result/0-patient.single.identifier.json';
import patientMultipleIdentifier from './fixtures/result/1-patient.multiple.identifier.json';
import patientMultipleName from './fixtures/result/2-patient.multiple.name.json';
import patientMultipleTelecom from './fixtures/result/3-patient.multiple.telecom.json';
import patientExtension from './fixtures/result/4-patient.extention.json';
import patientMultipleAddress from './fixtures/result/5-patient.multiple.address.json';
import patientContact from './fixtures/result/6-patient.contact.json';
import patientMedication from './fixtures/result/0-multiple-resource.json';
import patientMultiple from './fixtures/result/7-patient.multiple.json';

import { Compile } from '../../src/main';
describe('Patient e2e', () => {
  describe('identifier', () => {
    it('should set single identifer', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/0-patient.single.identifier.txt'
        )
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientSingleIdentifier);
    });
    it('should set multiple identifer', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/1-patient.multiple.identifier.txt'
        )
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientMultipleIdentifier);
    });
    it('should set multiple name', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/2-patient.multiple.name.txt')
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientMultipleName);
    });
    it('should set multiple telecom', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/3-patient.multiple.telecom.txt'
        )
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientMultipleTelecom);
    });
    it('should set extensions', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/4-patient.extension.txt')
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientExtension);
    });
    it('should set address', () => {
      const file = fs.readFileSync(
        path.resolve(
          __dirname,
          './fixtures/input/5-patient.multiple.address.txt'
        )
      );
      let [patient] = Compile(file);
      expect(patient).toEqual(patientMultipleAddress);
    });
    it('should set contact', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/6-patient.contact.txt')
      );
      let [patient] = Compile(file);

      expect(patient).toEqual(patientContact);
    });

    it('should set resrouce patient and medication', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/0-multiple-resource.txt')
      );
      let [patient, medication] = Compile(file);

      expect(patient).toEqual(patientMedication[0]);
      expect(medication).toEqual(patientMedication[1]);
    });

    it('should set multiple patient resource', () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, './fixtures/input/7-patient.multiple.txt')
      );
      let [patientOne, patientTwo] = Compile(file);

      expect(patientOne).toEqual(patientMultiple[0]);
      expect(patientTwo).toEqual(patientMultiple[1]);
    });
  });
});
