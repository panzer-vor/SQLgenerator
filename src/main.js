import { createQuery } from './parsers/createQuery'
import { select } from './parsers/select'
class SQLGenerator {
  constructor() {
    this._str = 'SELECT '
    this.createQuery = createQuery
    this.select = select
  }
  getQuery() {
    return `SELECT ${select() || '*'}`
  }
}
new SQLGenerator().createQuery()