import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
export declare function where(
  where: string
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function inWhere(
  where: string[] | number[],
  field: string, 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function orWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR' 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function andWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR'
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}
