export function leftJoin(
  [joinTableName, joinTableRename], 
  ...condition
) {
  this._str += `LEFT JOIN ${joinTableName} `
  if (joinTableRename) {
    this._str += `AS ${joinTableRename} `
  }
  const useWhereParser = typeof condition[0] === 'string' ? false : true
  if (useWhereParser) {
    const {
      autoFill,
      prefix,
      whereField
    } = this.__handleWhereParams(condition)
    this._str += `ON ${this.__handleWhereString(whereField, prefix, autoFill)} `
  } else {
    this._str += `ON ${condition[0]} `
  }
  
  return this
}