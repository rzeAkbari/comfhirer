import { FhirResource } from 'fhir/r4';
import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { ASTNode } from './model';

interface activeResource {
  [name: string]: FhirResource;
}

let activeRersources: activeResource = {};

export default function traverse(astNodes: ASTNode[]): FhirResource[] {
  let result: FhirResource[] = [];
  activeRersources = instantiateResources(astNodes);

  const resrouceInstance = activeRersources[astNodes[0].name];

  result.push(resrouceInstance);

  return result;
}

function instantiateResources(astNodes: ASTNode[]): activeResource {
  let activeRersources: activeResource = {};

  for (const node of astNodes) {
    if (!activeRersources[node.name]) {
      const resourceRef = FhirResourceTypes[node.name];
      const resourceInstance = new resourceRef();
      activeRersources[node.name] = resourceInstance;
    }
  }

  return activeRersources;
}
