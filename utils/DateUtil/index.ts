type acceptedTypes = Date | number | string;

export default class DateUtil {
  public date: acceptedTypes;
  public persian: boolean = false;

  constructor(date?: acceptedTypes, persian?: boolean) {
    this.date = date || new Date();
    this.persian = persian || false;
  }

  public getTimestamp() {
    if (this.date instanceof Date) {
      return Number(this.date);
    } else if (typeof this.date === "number") {
      return this.date;
    } else if (typeof this.date === "string") {
      return Date.parse(this.date) / 1000;
    }
    return this.date;
  }

  public getDateObject() {
    if (this.date instanceof Date) {
      return this.date;
    } else if (typeof this.date === "number") {
      return new Date(this.date);
    } else if (typeof this.date === "string") {
      return new Date(Date.parse(this.date) / 1000);
    }
    return new Date(this.date);
  }

  public format(type: "short" | "long" | "full" | "medium" = "short") {
    if (this.persian) {
      return this.getDateObject().toLocaleDateString("fa-IR-u-nu-latn", { dateStyle: type });
    }

    return this.getDateObject().toLocaleDateString("en-US", { dateStyle: type });
  }

  public getInputDate() {
    return this.getDateObject().toISOString().slice(0, 10);
  }

  public toString() {
    return this.format();
  }
}
