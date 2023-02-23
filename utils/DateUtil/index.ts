type acceptedTypes = Date | number | string;

export class DateUtil {
  public date: acceptedTypes;

  constructor(date: acceptedTypes) {
    this.date = date;
  }

  public getTimestamp() {
    if (this.date instanceof Date) {
      return Number(this.date);
    } else if (typeof this.date === "number") {
      return this.date;
    } else if (typeof this.date === "string") {
      return Date.parse(this.date) / 1000;
    }
  }

  public format(type: "short" | "long" = "short") {
    if (type === "short") {
    } else if ((type = "long")) {
    }
  }
}
