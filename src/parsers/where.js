export function where(
  where = '', 
) {
  this._str += `WHERE ${where} `
  return this
}

export function inWhere(
  where,
  field
) {
  if (this._str.indexOf('where') === -1) this._str += 'WHERE '
  this._str += `${field} IN (${where.join()})` + ' '
  return this
}

export function andWhere(
  where,
  prefix,
) {
  prefix ? this._str += `${prefix} ` :  this._str += 'AND '
  if (typeof where === 'string') this._str += `${where} `
  if (Array.isArray(where)) this._str += where.join(' AND ') + ' '
  return this
}

export function orWhere(
  where,
  prefix,
) {
  prefix ? this._str += `${prefix} ` :  this._str += 'OR '
  if (typeof where === 'string') this._str += `${where} `
  if (Array.isArray(where)) this._str += `(${where.join(' OR ')})` + ' '
  return this
}
