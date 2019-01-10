import createSelectQuery from './builder/selectBuilder'
import createUpdateQuery from './builder/updateBuilder'

export class SQLGenerator {
  constructor() {
    this._str = ''
    this.createSelectQuery = createSelectQuery
    this.createUpdateQuery = createUpdateQuery
  }
}
export default new SQLGenerator()
export const sqlG = new SQLGenerator()
