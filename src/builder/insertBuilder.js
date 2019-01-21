import builderOrigin from './builderOrigin'
import { createInsertQuery } from '../parsers/createQuery'
export class createInsertQueryBuilder extends builderOrigin {
  constructor() {
    super()
    this._str = 'INSERT '
    this.createInsertQuery = createInsertQuery.bind(this)
  }
}

export default createInsertQueryBuilder