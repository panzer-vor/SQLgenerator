import { createInsertQuery } from '../parsers/createQuery'

export class createInsertQueryBuilder {
  constructor() {
    this._str = 'UPDATE * '
    this.createInsertQuery = createInsertQuery.bind(this)
  }
  getQuery() {
    const str = this._str
    this._str = 'UPDATE * '
    return str
  }
}

export default new createInsertQueryBuilder().createInsertQuery