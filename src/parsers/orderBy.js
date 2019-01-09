export function orderBy(
  field
) {
  this._str += `ORDER BY ${field} `
  return this
}