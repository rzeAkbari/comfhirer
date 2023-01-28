import { FhirResource } from "fhir/r4";
import { ASTNode } from "./model";

function evaluate(node: ASTNode): FhirResource {
  let resource: FhirResource = {
    resourceType: node.value,
  };

  return resource;
}

export default evaluate;
