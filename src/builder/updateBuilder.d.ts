import { createUpdateQuery } from '../parsers/createQuery'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { select } from '../parsers/select'

export declare class createUpdateQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public createUpdateQuery: createUpdateQuery
  public getQuery(): string
}