import { createSelectQueryBuilder } from "../builder/selectBuilder"

export declare function leftJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
): createSelectQueryBuilder {}