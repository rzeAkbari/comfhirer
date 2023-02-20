import * as fs from 'fs';
import path from 'path';
import { Compile } from '../../src/main';
import medicationFullResource from './fixtures/result/0-medication-full.json';

describe('Medication', () => {
  it('should create the complete resource', () => {
    const file = fs.readFileSync(
      path.resolve(__dirname, './fixtures/input/0-medication-full.txt')
    );
    let [medication] = Compile(file);

    expect(medication).toEqual(medicationFullResource);
  });
});
