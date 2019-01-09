export function groupBy(
  start, size
) {
  this._str += `LIMIT ${start}, ${size} `
  return this
}