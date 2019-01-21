import builderOrigin from './builderOrigin'
import { createUpdateQuery } from '../parsers/createQuery'
export class createUpdateQueryBuilder extends builderOrigin {
  constructor() {
    super()
    this._str = 'UPDATE '
    this.createUpdateQuery = createUpdateQuery.bind(this)
  }
}

export default createUpdateQueryBuilder