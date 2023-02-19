import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { Tokenize } from './tokenize';
import { FhirResource } from 'fhir/r4';

function Intellisense(expression: string) {
  const nodes = Tokenize(expression);
  const resourceName = nodes[0].value;
  const resourceInstance: FhirResource = new FhirResourceTypes[resourceName]();

  return Object.keys(resourceInstance).filter(
    (key) => key.indexOf('_') === -1 && key !== 'resourceType'
  );
}

export default Intellisense;
