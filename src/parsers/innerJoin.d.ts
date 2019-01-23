import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function innerJoin(
  joinTable: string[],
  condition: string, 
  type?: string | boolean,
  autoFill?: boolean
): createSelectQueryBuilder | createDeleteQueryBuilder {}