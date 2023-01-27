import { FhirResource } from "fhir/r4";
import { FhirResourceTypes } from "./fhirr4/fhirr4";

export function getResourceType(input: string): FhirResource["resourceType"] {
  const re = new RegExp("^([A-Za-z])*");
  const resource = input.match(re)[0];
  if (isFhirResource(resource)) return resource as FhirResource["resourceType"];
}

function isFhirResource(
  resource: string
): resource is FhirResource["resourceType"] {
  return FhirResourceTypes.includes(resource as FhirResource["resourceType"]);
}
