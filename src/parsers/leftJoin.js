export function leftJoin(
  [joinTableName, joinTableRename], 
  condition,
  type,
) {
  this._str += `LEFT JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  if (!Array.isArray(condition[0]) && typeof type !== 'undefined') throw new Error('you don\'t need param type')
  this._str += `ON ${this.__handleWhereString(condition, type)} `
  return this
}