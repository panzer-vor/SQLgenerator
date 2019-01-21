import { sqlG } from '../src/main'

test('createInsertQuery expected', () => {
  expect(
    sqlG
      .createInsertQuery(
        'table_name',
      )
      .select([
        ['id', 1],
        ['name', '张三']
      ])
      .getQuery()
  ).toBe("INSERT table_name (id,name) VALUES (1,'张三')")
})

