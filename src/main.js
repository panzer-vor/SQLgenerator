import createSelectQuery from './builder/selectBuilder'
import createUpdateQuery from './builder/updateBuilder'
import createInsertQuery from './builder/insertBuilder'
import createDeleteQuery from './builder/deleteBuilder'
export class SQLGenerator {
  constructor() {
    this._str = ''
    this.createSelectQuery = createSelectQuery
    this.createUpdateQuery = createUpdateQuery
    this.createInsertQuery = createInsertQuery
    this.createDeleteQuery = createDeleteQuery
  }
}
export default new SQLGenerator()
export const sqlG = new SQLGenerator()
