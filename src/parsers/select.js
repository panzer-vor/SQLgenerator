export function select(
  field
) {
  const ENV = this.__getCreateEnvironment()
  const fields = field.map(v => {
    const fieldArr = v
    if (fieldArr[1] && typeof fieldArr[1] === 'string' && (ENV === 2 || ENV === 3)) {
      fieldArr[1] = `'${fieldArr[1].replace(/'/g, "\\'")}'`
    }
    return fieldArr
  })
  if (ENV === 0) {
    const fieldsStr = fields.map(v => v[1] ? `${v[0]} AS ${v[1]}` : `${v[0]}`).join()
    this._str = this._str.replace('*', fieldsStr)
  }
  if (ENV === 1) {
    this._str = this._str.replace('*', fields.join())
  }
  if (ENV === 2) {
    const fieldsStr = fields.map(v => {
      if (!v[1]) throw new Error('expect value')
      return `${v[0]} = ${v[1]}`
    }).join()
    this._str += fieldsStr + ' '
  }
  if (ENV === 3) {
    const fieldsStrKeys = `(${fields.map(v => v[0]).join()})`
    const fieldsStrValues = `(${fields.map(v => v[1]).join()})`
    this._str += fieldsStrKeys + ' VALUES ' + fieldsStrValues
  }
  return this
}