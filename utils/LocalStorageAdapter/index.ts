export default class LocalStorageAdapter {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  get value() {
    return localStorage.getItem(this.key);
  }

  set value(newValue: string | null | undefined) {
    if (newValue) {
      localStorage.setItem(this.key, newValue);
    } else {
      // Remove "key" value from local storage when newValue is null or undefined or ""
      localStorage.removeItem(this.key);
    }
  }
}
