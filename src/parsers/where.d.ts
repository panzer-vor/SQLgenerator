import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
import { createDeleteQueryBuilder } from '../builder/deleteBuilder'
interface IWhere {
  [key: string, value: string | number, link?: string]: string | number
}
export declare function where(
  where: IWhere
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function inWhere(
  where: string[] | number[],
  field: string, 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function orWhere(
  where: IWhere | IWhere[],
  prefix?: 'AND' | 'OR' 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function andWhere(
  where: IWhere | IWhere[],
  prefix?: 'AND' | 'OR'
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}
