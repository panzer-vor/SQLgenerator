export function select(
  fields
) {
  const fieldsStr = Object.keys(fields).map(v => `${v} AS ${fields[v]}`).join(',')
  this._str = this._str.replace('*', fieldsStr);
  return this
}