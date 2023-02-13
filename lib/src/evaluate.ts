import { FhirResource } from 'fhir/r4';
import { ASTNode, Node } from './model';
import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import ComfhirerError from './comfhirerError';

function evaluate(node: ASTNode) {
  if (!FhirResourceTypes[node.name]) {
    throw new ComfhirerError(
      'UnsupportedResource',
      'resource not supported',
      'semantic'
    );
  }
  const resource = FhirResourceTypes[node.name];
  if (!Object.hasOwn(resource, node.field.name))
    throw new ComfhirerError(
      'UnsupportedKey',
      `${node.field.name} not exists in type ${node.name}`,
      'semantic'
    );
}

export default evaluate;
