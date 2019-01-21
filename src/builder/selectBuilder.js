import builderOrigin from './builderOrigin'
import { createSelectQuery } from '../parsers/createQuery'

export class createSelectQueryBuilder extends builderOrigin {
  constructor() {
    super()
    this._str = 'SELECT * '
    this.createSelectQuery = createSelectQuery.bind(this)
  }
  getInnerCount() {
    return `SELECT count(*) as total FROM (${this._str}) AS t`
  }
}
export default createSelectQueryBuilder
