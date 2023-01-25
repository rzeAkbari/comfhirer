import { Tokenize } from "../src/tokenize";

describe("Tokenize", () => {
  it("should be able to tokenize patient", () => {
    const input = "patient.name.first";
    const expectToken = ["patient"];

    expect(Tokenize(input)).toEqual(expectToken);
  });
});
