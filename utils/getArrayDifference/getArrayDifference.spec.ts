import getArrayDifference from ".";

describe("getArrayDifference", () => {
  it("should return an empty array if both input arrays are empty", () => {
    const result = getArrayDifference([], [], (item) => String(item));
    expect(result).toEqual([]);
  });

  it("should return the same array if the second input array is empty", () => {
    const arrayA = [1, 2, 3];
    const result = getArrayDifference(arrayA, [], (item) => item.toString());
    expect(result).toEqual(arrayA);
  });

  it("should return an empty array if both input arrays have the same elements", () => {
    const arrayA = [1, 2, 3];
    const arrayB = [1, 2, 3];
    const result = getArrayDifference(arrayA, arrayB, (item) => item.toString());
    expect(result).toEqual([]);
  });

  it("should return the elements from the first array that are not present in the second array", () => {
    const arrayA = [1, 2, 3, 4, 5];
    const arrayB = [3, 4, 5, 6, 7];
    const result = getArrayDifference(arrayA, arrayB, (item) => item.toString());
    expect(result).toEqual([1, 2]);
  });

  it("should handle objects as elements and compare based on a specified key", () => {
    const arrayA = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Alice" },
    ];
    const arrayB = [
      { id: 2, name: "Jane" },
      { id: 3, name: "Alice" },
    ];
    const result = getArrayDifference(arrayA, arrayB, (item) => item.id.toString());
    expect(result).toEqual([{ id: 1, name: "John" }]);
  });
});
