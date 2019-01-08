import { select } from "./select";

interface IFields {
  [filedsKey: string] : string
}

export declare function select(fields: IFields): string {}