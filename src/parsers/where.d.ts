import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
export declare function where(
  where: string
): createSelectQueryBuilder | createUpdateQueryBuilder {}

export declare function inWhere(
  where: string[] | number[],
  field: string, 
): createSelectQueryBuilder | createUpdateQueryBuilder {}

export declare function orWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR' 
): createSelectQueryBuilder | createUpdateQueryBuilder {}

export declare function andWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR'
): createSelectQueryBuilder | createUpdateQueryBuilder {}

