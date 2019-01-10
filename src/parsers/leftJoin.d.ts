import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function leftJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
): createSelectQueryBuilder | createDeleteQueryBuilder {}