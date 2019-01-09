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
  select: select
  where: where
  inWhere: inWhere
  andWhere: andWhere
  orWhere: orWhere
  leftJoin: leftJoin
  createSelectQuery: createSelectQuery
  getQuery(): string
}