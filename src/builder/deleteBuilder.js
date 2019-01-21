import builderOrigin from './builderOrigin'
import { createDeleteQuery } from '../parsers/createQuery'
export class createDeleteQueryBuilder extends builderOrigin {
  constructor() {
    super()
    this._str = 'DELETE * '
    this.createDeleteQuery = createDeleteQuery.bind(this)
  }
  getQuery() {
    if (this._str.indexOf('*' > -1)) this._str = this._str.replace('*', '')
    return this._str
  }
}

export default createDeleteQueryBuilder
