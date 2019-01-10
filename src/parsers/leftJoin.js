export function leftJoin(
  [joinTableName, joinTableRename], condition
) {
  this._str += `LEFT JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  this._str += `ON ${condition} `
  return this
}