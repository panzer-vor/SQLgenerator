import { createSelectQueryBuilder } from "./selectBuilder";
import { SQLGenerator } from '../main'
import { leftJoin } from '../parsers/leftJoin'
import { createSelectQuery } from '../parsers/createQuery'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { select } from '../parsers/select'

export declare class createSelectQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public leftJoin: leftJoin
  public createSelectQuery: createSelectQuery
  public input(str: string): createSelectQueryBuilder
  public getQuery(): string
}