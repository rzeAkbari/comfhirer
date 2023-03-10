import { ASTNode } from './model';
import {
  FhirFieldTypes,
  FhirResourceTypes,
} from './helper/fhirr4/standard-library';
import ComfhirerError from './comfhirerError';

function Evaluate(node: ASTNode) {
  const reg = new RegExp('[0-9]');

  if (!FhirResourceTypes[node.name]) {
    throw new ComfhirerError(
      'UnsupportedResource',
      'resource not supported',
      'semantic',
      node.name
    );
  }

  let resource = new FhirResourceTypes[node.name]();
  while (node.field) {
    if (!resource || !Object.hasOwn(resource, node.field.name))
      throw new ComfhirerError(
        'UnsupportedKey',
        `${node.field.name} not exists in type ${node.name}`,
        'semantic',
        node.field.name,
        node.field.level
      );
    resource = new FhirFieldTypes[node.field.name]();
    node.field = reg.test(node.field.field.name)
      ? node.field.field.field
      : node.field.field;
  }
}

export default Evaluate;
