import { Patient } from "fhir/r4";
import parse from "../src/parse";

describe("parse", () => {
  it("should parse patient birthdate", () => {
    const tokens = ["Patient", "birthDate", "20-12-1988"];
    const expectedPatientJson: Patient = {
      resourceType: "Patient",
      birthDate: "20-12-1988",
    };
    const patientJson = parse(tokens);

    expect(patientJson).toEqual(expectedPatientJson);
  });

  it.only("should parse patient full name", () => {
    const tokens = ["Patient", "name", "[0]", "text", "Raz Akbari"];
    const expectedPatientJson: Patient = {
      resourceType: "Patient",
      name: [
        {
          text: "Raz Akbari",
        },
      ],
    };
    const patientJson = parse(tokens);

    expect(patientJson).toEqual(expectedPatientJson);
  });
});
