import ComfhirerError, { ErrorName } from './comfhirerError';
import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { Error } from './constants';
import { Node } from './model';

export function Tokenize(input: string): Node[] {
  let tokens: Node[];
  let [path, value] = input.split('=');
  let keys = path.split('.');
  tokens = keys.map(
    (key: string) =>
      ({
        type: getKeyType(key),
        value: getKeyValue(key),
      } as Node)
  );

  value &&
    tokens.push({
      type: 'data',
      value: getDataValue(value),
    });

  return tokens;
}

function getKeyType(key: string): Node['type'] {
  key = key.trim();
  catchKeySyntaxError(key);
  if (FhirResourceTypes[key]) return 'resource';
  if (isArray(key)) return 'array';
  if (isSimpleArray(key)) return 'simpleArray';
  if (isIndex(key)) return 'index';

  return 'field';
}

function getKeyValue(value: string): string {
  return value.trim().replace(/[\[|\]\{\}\(\)]/g, '');
}

function getDataValue(value: string): string | boolean | number {
  if (value.indexOf('true') > -1) return true;
  if (value.indexOf('false') > -1) return false;
  if (value.indexOf("'") === -1 && value.indexOf('"') === -1) {
    if (Number.isNaN(Number.parseFloat(value)))
      throw new ComfhirerError(
        'UnsupportedValue',
        Error.message.NO_QUOTE,
        'syntax',
        'fhirValue'
      );
    return Number.parseInt(value);
  }
  return value.trim().replace(/['|"]/g, '');
}

function catchKeySyntaxError(key: string) {
  if (key.match(/\w\d|\d\w/)) {
    throw new ComfhirerError(
      'UnsupportedKey',
      Error.message.NO_NUMBER,
      'syntax',
      'fhirValue'
    );
  }
  if (key.match(/\w\[|\]\w/)) {
    throw new ComfhirerError(
      'UnsupportedKey',
      Error.message.NO_BRACKET,
      'syntax',
      key
    );
  }
  if (key.match(/\w\{|\}\w/)) {
    throw new ComfhirerError(
      'UnsupportedKey',
      Error.message.NO_PARANTHESIS,
      'syntax',
      key
    );
  }
}

function isArray(input: string): boolean {
  return input.indexOf('[') > -1;
}

function isSimpleArray(input: string): boolean {
  return input.indexOf('{') > -1;
}

function isIndex(input: string): boolean {
  return input.indexOf('(') > -1;
}
