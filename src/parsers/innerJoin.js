export function innerJoin(
  [joinTableName, joinTableRename], 
  condition,
  type,
  autoFill = false,
) {
  this._str += `INNER JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  const useWhereParser = typeof condition === 'string' ? false : true
  let xAutoFill = autoFill, xType = type
  if (typeof type === 'boolean') {
    xAutoFill = type
    xType = autoFill
  }
  if (useWhereParser) {
    if (!Array.isArray(condition[0]) && typeof type !== 'undefined') throw new Error('you don\'t need param type')
    this._str += `ON ${this.__handleWhereString(condition, xType, xAutoFill)} `
  } else {
    this._str += `ON ${condition} `
  }
  
  return this
}