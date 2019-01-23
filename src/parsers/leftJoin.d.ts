import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function leftJoin(
  joinTable: string[],
  condition: string, 
  type?: string | boolean,
  autoFill?: boolean
): createSelectQueryBuilder | createDeleteQueryBuilder {}