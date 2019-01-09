import { createSelectQueryBuilder } from "./selectBuilder";
import { SQLGenerator } from '../main'
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
  createSelectQuery: createSelectQuery
  getQuery(): string
}