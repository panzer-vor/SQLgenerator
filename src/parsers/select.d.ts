import { select } from "./select";
import { createSelectQueryBuilder } from "../builder/selectBuilder"

export declare function select(fields: {
  [filedsName: string] : string  
}): createSelectQueryBuilder {}