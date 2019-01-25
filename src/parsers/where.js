export function where(
  where, 
) {
  this._str += `WHERE `
  this._str += this.__handleWhereString(where)
  return this
}

export function inWhere(
  where,
  field
) {
  if (this._str.indexOf('where') === -1) this._str += 'WHERE '
  this._str += `${field} IN (${where.map(v => typeof v === 'string' ? `'${v}'` : v ).join()})` + ' '
  return this
}

export function andWhere(
  ...where
) {
  const {
    prefix,
    whereField,
    autoFill
  } = this.__handleWhereParams(where, 'AND')
  this._str += prefix + this.__handleWhereString(whereField, 'AND', autoFill)
  return this
}

export function orWhere(
  ...where
) {
  const {
    prefix,
    whereField,
    autoFill
  } = this.__handleWhereParams(where, 'OR')
  this._str += prefix + this.__handleWhereString(whereField, 'OR', autoFill)
  return this
}
