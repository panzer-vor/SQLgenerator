export function groupBy(
  field
) {
  this._str += `GROUP BY ${field} `
  return this
}