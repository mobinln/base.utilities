import HashTable from ".";

describe("HashTable", () => {
  let table: HashTable;

  beforeEach(() => {
    table = new HashTable();
  });

  test("put() should add key-value pair to the table", () => {
    table.put("foo", "bar");
    table.put("a", "a");
    expect(table.get("foo")).toBe("bar");
  });

  test("put() should handle collisions", () => {
    table = new HashTable(1); // Force a collision by using a table size of 1
    table.put("foo", "bar1");
    table.put("oof", "bar2");
    expect(table.get("foo")).toBe("bar1");
    expect(table.get("oof")).toBe("bar2");
  });

  test("get() should return undefined for non-existent key", () => {
    expect(table.get("non-existent")).toBeUndefined();
  });

  test("remove() should remove key-value pair from the table", () => {
    table.put("foo", "bar");
    table.remove("foo");
    expect(table.get("foo")).toBeUndefined();
  });

  test("remove() should handle collisions", () => {
    table = new HashTable(1); // Force a collision by using a table size of 1
    table.put("foo", "bar1");
    table.put("oof", "bar2");
    table.remove("foo");
    expect(table.get("foo")).toBeUndefined();
    expect(table.get("oof")).toBe("bar2");
  });
});
