import { Tokenize } from "../src/tokenize";

describe("Tokenize", () => {
  it("should tokenize valid words", () => {
    const input = "Patient.name.first";
    const expectToken = ["Patient", "name", "first"];

    expect(Tokenize(input)).toEqual(expectToken);
  });

  it("should remove spaces", () => {
    const input = "Patient .name. first";
    const expectToken = ["Patient", "name", "first"];

    expect(Tokenize(input)).toEqual(expectToken);
  });
});
