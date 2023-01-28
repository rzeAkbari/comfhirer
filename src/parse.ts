import { Patient } from "fhir/r4";
import { patient } from "./helper/fhirr4/resources/patient";

function parse(tokens: string[]) {
  let jsonPatient = new patient();
  jsonPatient["sth"] = "hi";

  // jsonPatient[tokens[1]] = [{ [tokens[3]]: tokens[4] }];

  if (jsonPatient instanceof patient) return jsonPatient;
  else throw new Error("compile error");
}

export default parse;
