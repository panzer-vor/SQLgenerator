import { select } from '../parsers/select'
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

export default class buildOrigin {
  constructor() {
    this.CREATE_ELEMENT = ['SELECT', 'DELETE', 'UPDATE', 'INSERT']
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
  }
  __getCreateEnvironment() {
    for (let i = 0;i < this.CREATE_ELEMENT.length; i++) {
      if (this._str.indexOf(this.CREATE_ELEMENT[i]) > -1) {
        return i
      }
    }
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    return this._str
  }
}