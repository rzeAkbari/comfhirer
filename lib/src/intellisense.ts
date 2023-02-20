import {
  FhirResourceTypes,
  FhirFieldTypes,
} from './helper/fhirr4/standard-library';
import { Tokenize } from './tokenize';
import { FhirResource } from 'fhir/r4';

function Intellisense(expression: string): string[] {
  let resourceInstance: FhirResource;
  const nodes = Tokenize(expression);

  if (nodes.length === 2) {
    const resourceName = nodes[0].value;
    resourceInstance = new FhirResourceTypes[resourceName]();
  } else {
    const fieldName = nodes[nodes.length - 1].value;
    resourceInstance = FhirFieldTypes[fieldName]
      ? new FhirFieldTypes[fieldName]()
      : [];
  }

  return Object.keys(resourceInstance).filter(
    (key) => key.indexOf('_') === -1 && key !== 'resourceType'
  );
}

export default Intellisense;
