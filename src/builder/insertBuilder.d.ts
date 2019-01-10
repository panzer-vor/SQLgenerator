import { createInsertQuery } from '../parsers/createQuery'
import { select } from '../parsers/select'

export declare class createInsertQueryBuilder{
  static _str: string
  public select: select
  public createInsertQuery: createInsertQuery
  public getQuery(): string
}