import { Patient } from "fhir/r4";
import evaluate from "../src/evaluate";
import { ASTNode } from "../src/model";

describe("Evalute", () => {
  it("evalutes the base patient resource", () => {
    const ast: ASTNode = { type: "resource", value: "Patient" };
    const expected: Patient = {
      resourceType: "Patient",
    };

    const result = evaluate(ast);

    expect(result).toEqual(expected);
  });
});
