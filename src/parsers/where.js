function handleWhereString (where, type = '') {
  let _str = ''
  function whereArray (array) {
    if (typeof array[1] === 'undefined') throw new Error('where params[0] need two length array')
    const key = array[0], juge = array[2] || '='
    const value = juge === 'LIKE' ? `'%${array[1]}%'` : array[1]
    return `${key} ${juge} ${value} `
  }
  if (Array.isArray(where[0])) {
    _str += `(${where.map(v => `${whereArray(v)}`).join(`${type} `)})` + ' '
  } else {
    _str += whereArray(where)
  }
  return _str
}

export function where(
  where, 
) {
  this._str += `WHERE `
  this._str += handleWhereString(where)
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
  this._str += handleWhereString(where, 'AND')
  return this
}

export function orWhere(
  where,
  prefix = 'OR',
) {
  this._str += `${prefix} `
  this._str += handleWhereString(where, 'OR')
  return this
}
