import { sqlG } from '../src/main'

test('createUpdateQuery expected', () => {
  expect(
    sqlG
      .createUpdateQuery(
        'table_name',
      )
      .select({
        'id': 1,
        'name': '"张三"'
      })
      .getQuery()
  ).toBe('UPDATE table_name SET id = 1,name = "张三" ')
})

