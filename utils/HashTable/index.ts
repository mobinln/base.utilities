type valueType = string | number | boolean | null;

export default class HashTable {
  private table: [string, valueType][][] = [];
  public size: number = 0;

  constructor(size: number = 127) {
    this.table = new Array(size);
    this.size = 0;
  }

  private _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  public put(key: string, value: valueType) {
    const index = this._hash(key);
    if (this.table[index]) {
      const listItem = this.table[index].find((i) => i[0] === key);
      if (listItem) {
        listItem[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  public get(key: string) {
    const index = this._hash(key);
    if (this.table[index]) {
      const listItem = this.table[index].find((i) => i[0] === key);
      return listItem?.[1] || undefined;
    }
    return undefined;
  }

  public remove(key: string) {
    const index = this._hash(key);
    if (this.table[index]) {
      const listItem = this.table[index].findIndex((i) => i[0] === key);
      if (listItem > -1) {
        this.table[index].splice(listItem, 1);
        this.size--;
      }
    }
  }

  public display() {
    this.table.forEach((i, index) => {
      console.log(`${index}: ${i.map((a) => `[${a[0]}: ${a[1]}]`)}`);
    });
  }
}
