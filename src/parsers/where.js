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
  this._str += `${field} IN ${Object.keys(where).join()}`
  return this
}

export function andWhere(
  where,
) {
  if (!where) this._str += 'AND '  
  if (typeof where === 'string') this._str += `AND ${where} `
  if (Array.isArray(where)) this._str += where.join(' AND ') + ' '
  return this
}

export function orWhere(
  where,
) {
  if (!where) this._str += 'OR '  
  if (typeof where === 'string') this._str += `OR ${where} `
  if (Array.isArray(where)) this._str += `(${where.join(' OR ')})` + ' '
  return this
}
