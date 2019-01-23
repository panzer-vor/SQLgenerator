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
  where,
  prefix = 'AND',
) {
  this._str += `${prefix} `
  this._str += this.__handleWhereString(where, 'AND')
  return this
}

export function orWhere(
  where,
  prefix = 'OR',
) {
  this._str += `${prefix} `
  this._str += this.__handleWhereString(where, 'OR')
  return this
}
