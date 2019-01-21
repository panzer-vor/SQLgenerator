const { sqlG } = require('./dist/sqlG')

console.log(
  sqlG
    .createUpdateQuery('t1')
    .select([
      ['t.id', 1]
    ])
    .getQuery()
)