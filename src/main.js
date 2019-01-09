import createSelectQuery from './builder/selectBuilder'

export class SQLGenerator {
  constructor() {
    this._str = ''
    this.createSelectQuery = createSelectQuery
  }
}
export default new SQLGenerator()
export const sqlG = new SQLGenerator()
