import createSelectQuery from './builder/selectBuilder'
import createUpdateQuery from './builder/updateBuilder'
import createInsertQuery from './builder/insertBuilder'
export class SQLGenerator {
  constructor() {
    this._str = ''
    this.createSelectQuery = createSelectQuery
    this.createUpdateQuery = createUpdateQuery
    this.createInsertQuery = createInsertQuery
  }
}
export default new SQLGenerator()
export const sqlG = new SQLGenerator()
