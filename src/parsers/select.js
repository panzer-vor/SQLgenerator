export function select(
  fields
) {
  if (this._str.indexOf('SELECT') > -1) {
    const fieldsStr = fields.map(v => v[1] ? `${v[0]} AS ${v[1]}` : `${v[0]}`).join()
    this._str = this._str.replace('*', fieldsStr)
  }
  if (this._str.indexOf('UPDATE') > -1) {
    const fieldsStr = fields.map(v => {
      if (!v[1]) throw new Error('expect value')
      return `${v[0]} = ${v[1]}`
    }).join()
    this._str += fieldsStr + ' '
  }
  if (this._str.indexOf('INSERT') > -1) {
    const fieldsStrKeys = `(${fields.map(v => v[0]).join()})`
    const fieldsStrValues = `(${fields.map(v => v[1]).join()})`
    this._str += fieldsStrKeys + ' VALUES ' + fieldsStrValues
  }
  if (this._str.indexOf('DELETE') > -1) {
    this._str = this._str.replace('*', fields.join())
  }
  return this  
}