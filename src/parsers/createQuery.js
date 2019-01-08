export function createQuery(
  tableName,
  tableRename,
) {
  return `${tableName} AS ${tableRename}`
}