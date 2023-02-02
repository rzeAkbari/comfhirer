import { FhirResource } from 'fhir/r4';
import { FhirResourceTypes } from './helper/fhirr4/standard-library';
import { ASTNode, Field } from './model';

interface activeResource {
  [name: string]: FhirResource;
}

let activeRersources: activeResource = {};

export default function traverse(astNodes: ASTNode[]): FhirResource[] {
  let result: FhirResource[] = [];
  activeRersources = instantiateResources(astNodes);

  for (const node of astNodes) {
    let resrouceInstance = activeRersources[node.name];
    propagateField(node.field, resrouceInstance, node.value); //ms
  }

  for (const resourceName of Object.keys(activeRersources)) {
    result.push(activeRersources[resourceName]);
  }

  return result;
}

function propagateField(field: Field, resrouceInstance, value: any) {
  if (isRoot(field)) return resrouceInstance;

  if (isLeafe(field)) {
    resrouceInstance[field.name] = value;
    return resrouceInstance;
  }

  if (field.type === 'FlatField') {
    resrouceInstance[field.name] = resrouceInstance[field.name] || {};

    resrouceInstance[field.name] = propagateField(
      field.field,
      resrouceInstance[field.name],
      value
    );
  }

  if (field.type === 'MultipleFields') {
    resrouceInstance = [propagateField(field.field, resrouceInstance, value)];
  }

  return resrouceInstance;
}

function isRoot(field: Field): boolean {
  return field === undefined;
}

function isLeafe(field: Field): boolean {
  return field.field === undefined;
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
