export function createSelectQuery(
  tableName,
  tableRename,
) {
  this._str += `FROM ${tableName} `
  if (tableRename) this._str += `AS ${tableRename} `
  return this
}