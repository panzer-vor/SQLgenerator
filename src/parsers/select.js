export function select(
  fields
) {
  if (this._str.indexOf('SELECT') > -1) {
    const fieldsStr = Object.keys(fields).map(v => `${v} AS ${fields[v]}`).join()
    this._str = this._str.replace('*', fieldsStr)
  }
  if (this._str.indexOf('UPDATE') > -1) {
    const fieldsStr = Object.keys(fields).map(v => `${v} = ${fields[v]}`).join()
    this._str += fieldsStr + ' '
  }
  if (this._str.indexOf('INSERT') > -1) {
    const fieldsStrKeys = `(${Object.keys(fields).join()})`
    const fieldsStrValues = `(${Object.keys(fields).map(v => fields[v]).join()})`
    this._str += fieldsStrKeys + ' VALUES ' + fieldsStrValues
  }
  return this  
}