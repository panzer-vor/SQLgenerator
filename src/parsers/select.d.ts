import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
import { createInsertQueryBuilder } from '../builder/insertBuilder'
export declare function select(
  fields: {
    [filedsName: string] : string  
  }
): createSelectQueryBuilder | createUpdateQueryBuilder | createInsertQueryBuilder {}