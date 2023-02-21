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
    const resourceKey = node.name + '_' + node.index;
    let resrouceInstance = activeRersources[resourceKey];
    propagateField(node.field, resrouceInstance, node.value);
  }

  for (const resourceName of Object.keys(activeRersources)) {
    result.push(activeRersources[resourceName]);
  }

  return result;
}

function propagateField(
  field: Field,
  resrouceInstance: any,
  value: any
): FhirResource {
  if (isRoot(field)) return resrouceInstance;

  if (isLeafe(field)) {
    if (isMultipleSimpleFields(field.type)) {
      resrouceInstance = setMultipleSimpleFields(
        resrouceInstance,
        field,
        value
      );
    } else {
      resrouceInstance[field.name] = value;
    }
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
    resrouceInstance =
      resrouceInstance instanceof Array ? resrouceInstance : [];
    const index = Number.parseInt(field.name, 10);
    if (index > resrouceInstance.length) {
      throw new Error('FhirArrayOutOfBand');
    }
    if (index === resrouceInstance.length) resrouceInstance.push({});

    propagateField(field.field, resrouceInstance[index], value);
  }

  return resrouceInstance;
}

function isRoot(field: Field): boolean {
  return field === undefined;
}

function isLeafe(field: Field): boolean {
  return field.field === undefined;
}

function isMultipleSimpleFields(fieldType: string): boolean {
  return fieldType === 'MultipleSimpleFields';
}

function setMultipleSimpleFields(resrouceInstance, field, value) {
  resrouceInstance = resrouceInstance instanceof Array ? resrouceInstance : [];
  const index = Number.parseInt(field.name, 10);
  resrouceInstance.splice(index, 0, value);

  return resrouceInstance;
}

function instantiateResources(astNodes: ASTNode[]): activeResource {
  let activeRersources: activeResource = {};
  for (const node of astNodes) {
    const resourceKey = node.name + '_' + node.index;
    if (!activeRersources[resourceKey]) {
      const resourceRef = FhirResourceTypes[node.name];
      const resourceInstance = new resourceRef();
      activeRersources[resourceKey] = resourceInstance;
    }
  }

  return activeRersources;
}
