import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { getResourceType } from './helper/regex';
import { ASTNode } from './model';

export function Tokenize(input: string): ASTNode[] {
  let tokens: ASTNode[];
  let [path, value] = input.split('=');
  let keys = path.split('.');
  tokens = keys.map(
    (key: string) =>
      ({
        type: getKeyType(key),
        value: getValue(key),
      } as ASTNode)
  );

  tokens.push({
    type: 'data',
    value: getValue(value),
  });

  return tokens;
}

function getKeyType(key: string): ASTNode['type'] {
  key = key.trim();
  if (FhirResourceTypes[key]) return 'resource';
  if (isArray(key)) return 'array';

  return 'field';
}

function getValue(value: string) {
  return value.trim().replace(/['|"|\[|\]]/g, '');
}

function isArray(input: string) {
  return input.indexOf('[') > -1;
}
