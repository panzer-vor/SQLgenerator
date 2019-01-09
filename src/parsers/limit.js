export function limit(
  start, size
) {
  this._str += `LIMIT ${start}, ${size} `
  return this
}