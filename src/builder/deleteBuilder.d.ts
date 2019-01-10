import { createDeleteQuery } from '../parsers/createQuery'
import { select } from '../parsers/select'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { leftJoin } from '../parsers/leftJoin'

export declare class createDeleteQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public leftJoin: leftJoin
  public createDeleteQuery: createDeleteQuery
  public getQuery(): string
}