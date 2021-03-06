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
  __handleWhereParams (params, type = '') {
    let whereField = []
    let autoFill = true
    let prefix = type + ' '
    for (const v of params) {
      if (typeof v === 'string' && (v.indexOf('OR') > -1 || v.indexOf('AND') > -1)) {
        prefix = v + ' '
      }
      if (typeof v === 'boolean') {
        autoFill = v
      }
      if (Array.isArray(v)) {
        whereField.push(v)
      }
    }
    if (whereField.length === 1) {
      whereField = whereField[0]
    }
    return {
      prefix,
      whereField,
      autoFill,
    }
  }
  __handleWhereString (where, type = '', autoFill = true) {
    let _str = ''
    function whereArray ([key, value, linkWay]) {
      if (typeof value === 'undefined') throw new Error('where params[0] need two length array')
      let newValue
      if (autoFill) {
        newValue = linkWay === 'LIKE' ? `'%${value}%'` 
          : typeof value === 'string' ? `'${value}'` : value
      } else {
        newValue = value
      }
      return `${key} ${linkWay || '='} ${newValue} `
    }
    if (Array.isArray(where[0])) {
      _str += `(${where.map(v => `${whereArray(v)}`).join(`${type} `)})` + ' '
    } else {
      _str += whereArray(where)
    }
    return _str
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    return this._str
  }
}