import getArrayDifference from ".";

describe("getArrayDifference", () => {
  it("should not change A if b is []", () => {
    const A = [1, 2, 3, 4];
    const B: number[] = [];
    const result = getArrayDifference(A, B, (i) => String(i));
    expect(result).toEqual(A);
  });

  it("should find difference correctly", () => {
    const A = [1, 2, 3, 4];
    const B = [1, 3];
    const result = getArrayDifference(A, B, (i) => String(i));
    expect(result).toEqual([2, 4]);
  });

  it("should be able to work with objects", () => {
    const A = [
      { name: "max", age: 20 },
      { name: "alex", age: 25 },
      { name: "mia", age: 22 },
      { name: "maria", age: 52 },
    ];
    const B = [
      { name: "alex", age: 25 },
      { name: "mia", age: 22 },
    ];
    const result = getArrayDifference(A, B, (i) => i.name);
    expect(result).toEqual([
      { name: "max", age: 20 },
      { name: "maria", age: 52 },
    ]);
  });

  it("should handle the case when A is [] and B is [...]", () => {
    const A: number[] = [];
    const B = [2, 3];
    const result = getArrayDifference(A, B, (i) => String(i));
    expect(result).toEqual([]);
  });
});
