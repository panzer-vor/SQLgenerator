import { select } from '../parsers/select'
import { createSelectQuery } from '../parsers/createQuery'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { leftJoin } from '../parsers/leftJoin'
import { groupBy } from '../parsers/groupBy'
import { orderBy } from '../parsers/orderBy'
import { innerJoin } from '../parsers/innerJoin'
import { limit } from '../parsers/limit'

export class createSelectQueryBuilder {
  constructor() {
    this._str = 'SELECT * '
    this.select = select
    this.where = where
    this.inWhere = inWhere
    this.andWhere = andWhere
    this.orWhere = orWhere
    this.groupBy = groupBy
    this.leftJoin = leftJoin
    this.innerJoin = innerJoin
    this.orderBy = orderBy
    this.limit = limit
    this.createSelectQuery = createSelectQuery.bind(this)
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    return this._str
  }
  getInnerCount() {
    return `SELECT count(*) as total FROM (${this._str}) AS t`
  }
}

export default createSelectQueryBuilder
