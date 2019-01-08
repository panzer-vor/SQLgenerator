export function select(
  fields
) {
  return Object.keys(fields).map(v => `${v} AS ${fields[v]}`).join(',')
}