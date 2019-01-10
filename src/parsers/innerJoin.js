export function innerJoin(
  [joinTableName, joinTableRename], condition
) {
  this._str += `INNER JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  this._str += `ON ${condition} `
  return this
}