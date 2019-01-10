const { sqlG } = require('sql-g');

console.log(
  sqlG
  .createSelectQuery('table_name')
  .select('aaa')
  .getQuery()
)
// const sqlInstance = sqlG
//     .createSelectQuery(
//       't_book_info',
//       'b'
//     )
//     .select({
//       'b.book_id': 'bookId',
//       'b.article': 'article',
//       'b.content': 'content',
//     })
//     .leftJoin(['t_book_tags', 'bt'], 'bt.id = b.id')
//     .where('b.book_id = 1')
// console.log(
//   sqlInstance
//     .andWhere(
//       [
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//         'b.book_id = 1',
//       ]
//     )
//     .orWhere()
//     .orWhere([
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//       'b.book_id = 1',
//     ])
//     .getQuery()
// )