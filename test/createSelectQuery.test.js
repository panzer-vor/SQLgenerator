import { sqlG } from '../src/main'

test('createSelectQuery expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t ')
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .select({
        't.id': 'id',
        't.name': 'name'
      })
      .getQuery()
  ).toBe('SELECT t.id AS id,t.name AS name FROM table_name AS t ')
})

test('select expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .select({
        't.id': 'id',
        't.name': 'name'
      })
      .getQuery()
  ).toBe('SELECT t.id AS id,t.name AS name FROM table_name AS t ')
})

test('where expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 ')
})

test('inWhere expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .inWhere([1, 2, 3], 't.id')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id IN (1,2,3) ')
})

test('andWhere expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .andWhere('t.id = 2')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 AND t.id = 2 ')
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .andWhere([
        't.id = 2',
        't.id = 3',
        't.id = 4',        
      ])
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 AND t.id = 2 AND t.id = 3 AND t.id = 4 ')
})

test('orWhere expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .orWhere('t.id = 2')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 OR t.id = 2 ')
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .orWhere([
        't.id = 2',
        't.id = 3',
        't.id = 4',        
      ], 'AND')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 AND (t.id = 2 OR t.id = 3 OR t.id = 4) ')
})

test('orWhere connect andWhere expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .andWhere('t.id = 3')
      .orWhere('t.id = 2')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 AND t.id = 3 OR t.id = 2 ')
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .where('t.id = 1')
      .andWhere([
        't.id = 2',
        't.id = 3',
        't.id = 4',
      ])
      .orWhere([
        't.id = 2',
        't.id = 3',
        't.id = 4',        
      ])
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t WHERE t.id = 1 AND t.id = 2 AND t.id = 3 AND t.id = 4 OR (t.id = 2 OR t.id = 3 OR t.id = 4) ')
})

test('leftJoin expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .leftJoin(
        ['table_id', 'i'],
        'i.id = 1'
      )
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t LEFT JOIN table_id AS i ON i.id = 1 ')
})

test('innerJoin expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .innerJoin(
        ['table_id', 'i'],
        'i.id = 1'
      )
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t INNER JOIN table_id AS i ON i.id = 1 ')
})

test('groupBy expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .groupBy('t.id')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t GROUP BY t.id ')
})

test('orderBy expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .orderBy('t.id ASC')
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t ORDER BY t.id ASC ')
})

test('limit expected', () => {
  expect(
    sqlG
      .createSelectQuery(
        'table_name',
        't'
      )
      .limit(10, 1)
      .getQuery()
  ).toBe('SELECT * FROM table_name AS t LIMIT 10, 1 ')
})