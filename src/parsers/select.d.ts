import { createSelectQueryBuilder } from "../builder/selectBuilder"
import { createUpdateQueryBuilder } from '../builder/updateBuilder'

export declare function select(fields: {
  [filedsName: string] : string  
}): createSelectQueryBuilder | createUpdateQueryBuilder {}