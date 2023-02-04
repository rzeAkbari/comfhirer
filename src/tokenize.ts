import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { getResourceType } from './helper/regex';
import { Node } from './model';

export function Tokenize(input: string): Node[] {
  let tokens: Node[];
  let [path, value] = input.split('=');
  let keys = path.split('.');
  tokens = keys.map(
    (key: string) =>
      ({
        type: getKeyType(key),
        value: getValue(key),
      } as Node)
  );

  tokens.push({
    type: 'data',
    value: getValue(value),
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

function getValue(value: string): string | boolean {
  if (value.indexOf('true') > -1) return true;
  else if (value.indexOf('false') > -1) return false;
  return value.trim().replace(/['|"|\[|\]\{\}]/g, '');
}

function isArray(input: string) {
  return input.indexOf('[') > -1;
}

function isSimpleArray(input: string) {
  return input.indexOf('{') > -1;
}
