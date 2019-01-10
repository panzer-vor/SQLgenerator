import { createDeleteQuery } from '../parsers/createQuery'

export class createDeleteQueryBuilder {
  constructor() {
    this._str = 'UPDATE '
    this.createDeleteQuery = createDeleteQuery.bind(this)
  }
  getQuery() {
    const str = this._str
    this._str = 'UPDATE '
    return str
  }
}

export default new createDeleteQueryBuilder().createDeleteQuery
