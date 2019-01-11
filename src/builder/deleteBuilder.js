import { createDeleteQuery } from '../parsers/createQuery'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { leftJoin } from '../parsers/leftJoin'
import { innerJoin } from '../parsers/innerJoin'
import { select } from '../parsers/select'
export class createDeleteQueryBuilder {
  constructor() {
    this._str = 'DELETE * '
    this.select = select
    this.where = where
    this.inWhere = inWhere
    this.andWhere = andWhere
    this.orWhere = orWhere
    this.leftJoin = leftJoin
    this.innerJoin = innerJoin
    this.createDeleteQuery = createDeleteQuery.bind(this)
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    if (this._str.indexOf('*' > -1)) this._str = this._str.replace('*', '')
    return this._str
  }
}

export default createDeleteQueryBuilder
