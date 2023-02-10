import { FhirResource } from 'fhir/r4';
import { Node } from './model';

function evaluate(node: Node): FhirResource {
  let resource: FhirResource = {
    resourceType: node.value,
  };

  return resource;
}

export default evaluate;
