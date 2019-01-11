import { createUpdateQuery } from '../parsers/createQuery'
import { where, andWhere, orWhere, inWhere} from '../parsers/where'
import { select } from '../parsers/select'
export class createUpdateQueryBuilder {
  constructor() {
    this._str = 'UPDATE '
    this.where = where
    this.inWhere = inWhere
    this.andWhere = andWhere
    this.orWhere = orWhere
    this.select = select
    this.createUpdateQuery = createUpdateQuery.bind(this)
  }
  input(str) {
    this._str += str
    return this
  }
  getQuery() {
    return this._str
  }
}

export default createUpdateQueryBuilder