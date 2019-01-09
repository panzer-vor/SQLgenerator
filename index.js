const sql = require('./bundle').default;

const sqlInstance = sql
    .createSelectQuery(
      't_book_info',
      'b'
    )
    .select({
      'b.book_id': 'bookId',
      'b.article': 'article',
      'b.content': 'content',
    })
    .where('b.book_id = 1')
console.log(
  sqlInstance
    .andWhere(
      [
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
        'b.book_id = 1',
      ]
    )
    .orWhere()
    .orWhere([
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
      'b.book_id = 1',
    ])
    .getQuery()
)