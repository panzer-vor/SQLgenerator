import { createUpdateQuery } from '../parsers/createQuery'

export class createUpdateQueryBuilder {
  constructor() {
    this._str = 'UPDATE * '
    this.createUpdateQuery = createUpdateQuery.bind(this)
  }
  getQuery() {
    const str = this._str
    this._str = 'UPDATE * '
    return str
  }
}

export default new createUpdateQueryBuilder().createUpdateQuery