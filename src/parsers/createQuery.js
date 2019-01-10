export function createSelectQuery(
  tableName,
  tableRename,
) {
  this._str += `FROM ${tableName} `
  if (tableRename) this._str += `AS ${tableRename} `
  return this
}

export function createUpdateQuery(
  tableName,
) {
  this._str += `${tableName} SET `
  return this
}

export function createInsertQuery(
  tableName,
) {
  this._str += `${tableName} `
  return this
}

export function createDeleteQuery(
  tableName,
  tableRename,
) {
  this._str += `FROM ${tableName} `
  if (tableRename) this._str += `AS ${tableRename} `
  return this
}