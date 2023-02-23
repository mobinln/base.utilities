import getChangedFields from ".";

describe("getChangedFields", () => {
  it("should return an empty object when given two identical objects", () => {
    const originalValues = { name: "John", age: 30 };
    const newValues = { name: "John", age: 30 };
    const result = getChangedFields(originalValues, newValues);
    expect(result).toEqual({});
  });

  it("should return an object with changed fields and their new values", () => {
    const originalValues = { name: "John", age: 30, email: "john@example.com" };
    const newValues = { name: "Johnny", age: 31, phone: "555-555-5555" };
    const result = getChangedFields(originalValues, newValues);
    expect(result).toEqual({ name: "Johnny", age: 31, phone: "555-555-5555" });
  });

  it("should ignore properties in newValues that do not exist in originalValues", () => {
    const originalValues = { name: "John", age: 30 };
    const newValues = { name: "Johnny", age: 31, phone: "555-555-5555" };
    const result = getChangedFields(originalValues, newValues);
    expect(result).toEqual({ name: "Johnny", age: 31, phone: "555-555-5555" });
  });

  it("should ignore properties in originalValues that do not exist in newValues", () => {
    const originalValues = { name: "John", age: 30, email: "john@example.com" };
    const newValues = { name: "Johnny", age: 31 };
    const result = getChangedFields(originalValues, newValues);
    expect(result).toEqual({ name: "Johnny", age: 31, email: undefined });
  });
});
