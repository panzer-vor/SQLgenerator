import createSelectQueryBuilder from './builder/selectBuilder'
import createUpdateQueryBuilder from './builder/updateBuilder'
import createInsertQueryBuilder from './builder/insertBuilder'
import createDeleteQueryBuilder from './builder/deleteBuilder'
export class SQLGenerator {
  createSelectQuery(...params) {
    return new createSelectQueryBuilder().createSelectQuery(...params)
  }
  createUpdateQuery(...params) {
    return new createUpdateQueryBuilder().createUpdateQuery(...params)
  }
  createInsertQuery(...params) {
    return new createInsertQueryBuilder().createInsertQuery(...params)
  }
  createDeleteQuery(...params) {
    return new createDeleteQueryBuilder().createDeleteQuery(...params)
  }
}
SQLGenerator.getInstance = (() => {
  let instance
  return () => {
    if (!instance) instance = new SQLGenerator()
    return instance
  }
})()
export default SQLGenerator.getInstance()
export const sqlG = SQLGenerator.getInstance()
