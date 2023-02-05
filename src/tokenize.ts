import { FhirResourceTypes } from './helper/fhirr4/standard-library';
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

  tokens.push({
    type: 'data',
    value: getDataValue(value),
  });

  return tokens;
}

function getKeyType(key: string): Node['type'] {
  key = key.trim();
  if (FhirResourceTypes[key]) return 'resource';
  if (isArray(key)) return 'array';
  if (isSimpleArray(key)) return 'simpleArray';

  return 'field';
}

function getKeyValue(value: string): string {
  return value.trim().replace(/[\[|\]\{\}]/g, '');
}

function getDataValue(value: string): string | boolean | number {
  if (value.indexOf('true') > -1) return true;
  else if (value.indexOf('false') > -1) return false;
  if (value.indexOf("'") === -1 && value.indexOf('"') === -1)
    return Number.parseInt(value);
  return value.trim().replace(/['|"]/g, '');
}

function isArray(input: string) {
  return input.indexOf('[') > -1;
}

function isSimpleArray(input: string) {
  return input.indexOf('{') > -1;
}
