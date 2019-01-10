import { sqlG } from '../src/main'

test('createDeleteQuery expected', () => {
  expect(
    sqlG
      .createDeleteQuery(
        'table_name',
        't'
      )
      .select(
        ['t']
      )
      .getQuery()
  ).toBe('DELETE t FROM table_name AS t ')
  expect(
    sqlG
      .createDeleteQuery(
        'table_name',
      )
      .where('id = 1')
      .getQuery()
  ).toBe('DELETE  FROM table_name WHERE id = 1 ')
})
