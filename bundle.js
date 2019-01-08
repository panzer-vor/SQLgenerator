'use strict';

function createQuery() {
  console.log(this);
}

class SQLGenerator {
  constructor() {
    this._str = 'SELECT ';
    this._fieldsStr = '';
    this._createQuery = createQuery;

  }
  getQuery() {
    return this._str
  }
}
new SQLGenerator()._createQuery();
