export function leftJoin(
  [joinTableName, joinTableRename], condition, ...conditions
) {
  this._str += `LEFT JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  this._str += `ON ${condition}`
  return this
}