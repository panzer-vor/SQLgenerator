export function groupBy(
  field
) {
  this._str += `ORDER BY ${field} `
  return this
}