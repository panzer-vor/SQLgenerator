import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function innerJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
): createSelectQueryBuilder | createDeleteQueryBuilder {}