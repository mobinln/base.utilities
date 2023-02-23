import groupBy from ".";

const data = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Mary", age: 32 },
  { id: 3, name: "Jane", age: 28 },
  { id: 4, name: "Bob", age: 35 },
];

describe("groupBy", () => {
  it("should group by age", () => {
    const groupedData = groupBy(data, (p) => p.age);
    expect(groupedData.size).toBe(3);
    expect(groupedData.get(28)?.length).toBe(2);
    expect(groupedData.get(32)?.[0]?.name).toBe("Mary");
    expect(groupedData.get(35)?.[0]?.id).toBe(4);
  });

  it("should group by name", () => {
    const groupedData = groupBy(data, (item) => item.name[0]);
    expect(groupedData.size).toBe(3);
    expect(groupedData.get("J")?.length).toBe(2);
    expect(groupedData.get("B")?.[0].age).toBe(35);
    expect(groupedData.get("M")?.[0].id).toBe(2);
  });

  it("should return an empty map for empty input", () => {
    const emptyData: any[] = [];
    const groupedData = groupBy(emptyData, (p) => p.age);
    expect(groupedData.size).toBe(0);
  });
});
