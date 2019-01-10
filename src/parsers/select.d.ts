import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
import { createInsertQueryBuilder } from '../builder/insertBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function select(
  fields: {
    [filedsName: string] : string  
  } | string[]
): createSelectQueryBuilder | createUpdateQueryBuilder | createInsertQueryBuilder | createDeleteQueryBuilder {}