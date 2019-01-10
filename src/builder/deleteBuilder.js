import { createDeleteQuery } from '../parsers/createQuery'
import {
  where,
  inWhere,
  andWhere,
  orWhere
} from '../parsers/where'
import { leftJoin } from '../parsers/leftJoin'
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
    this.createDeleteQuery = createDeleteQuery.bind(this)
  }
  getQuery() {
    let str = this._str
    if (this._str.indexOf('*' > -1)) str = str.replace('*', '')
    this._str = 'DELETE * '
    return str
  }
}

export default new createDeleteQueryBuilder().createDeleteQuery