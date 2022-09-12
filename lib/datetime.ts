import { format } from "date-fns";

class Datetime {
  constructor(private readonly _value: string) {}

  format(pattern: string) {
    return format(new Date(this._value), pattern);
  }
}

export default Datetime;
