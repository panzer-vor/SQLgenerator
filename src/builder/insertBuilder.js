import { createInsertQuery } from '../parsers/createQuery'
import { select } from '../parsers/select'
export class createInsertQueryBuilder {
  constructor() {
    this._str = 'INSERT '
    this.select = select
    this.createInsertQuery = createInsertQuery.bind(this)
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    const str = this._str
    this._str = 'INSERT '
    return str
  }
}

export default new createInsertQueryBuilder().createInsertQuery