import {
  where,
  inWhere,
  andWhere,
  orWhere
} from './where'
import { createSelectQueryBuilder } from "../builder/selectBuilder"

export declare function where(
  where: string
): SQLGenerator {}

export declare function inWhere(
  where: string[] | number[],
  field: string, 
): SQLGenerator {}

export declare function orWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR' 
): SQLGenerator {}

export declare function andWhere(
  where: string | string[],
  prefix?: 'AND' | 'OR'
): createSelectQueryBuilder {}

