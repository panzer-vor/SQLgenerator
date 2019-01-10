import { createInsertQuery } from '../parsers/createQuery'

export class createInsertQueryBuilder {
  constructor() {
    this._str = 'INSERT '
    this.createInsertQuery = createInsertQuery.bind(this)
  }
  getQuery() {
    const str = this._str
    this._str = 'INSERT '
    return str
  }
}

export default new createInsertQueryBuilder().createInsertQuery