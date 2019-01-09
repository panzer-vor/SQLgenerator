'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function select(
  fields
) {
  const fieldsStr = Object.keys(fields).map(v => `${v} AS ${fields[v]}`).join(',') + ' ';
  this._str = this._str.replace('*', fieldsStr);
  return this
}

function createSelectQuery(
  tableName,
  tableRename,
) {
  this._str += `FROM ${tableName} `;
  if (tableRename) this._str += `AS ${tableRename} `;
  return this
}

function where(
  where = '', 
) {
  this._str += `WHERE ${where} `;
  return this
}

function inWhere(
  where,
  field
) {
  this._str += `${field} IN ${Object.keys(where).join()}`;
  return this
}

function andWhere(
  where,
) {
  if (!where) this._str += 'AND ';  
  if (typeof where === 'string') this._str += `AND ${where} `;
  if (Array.isArray(where)) this._str += where.join(' AND ') + ' ';
  return this
}

function orWhere(
  where,
) {
  if (!where) this._str += 'OR ';  
  if (typeof where === 'string') this._str += `OR ${where} `;
  if (Array.isArray(where)) this._str += `(${where.join(' OR ')})`;
  return this
}

class createSelectQueryBuilder {
  constructor() {
    this._str = 'SELECT * ';
    this.select = select;
    this.where = where;
    this.inWhere = inWhere;
    this.andWhere = andWhere;
    this.orWhere = orWhere;
    this.createSelectQuery = createSelectQuery.bind(this);
  }
  getQuery() {
    return this._str
  }
}

var createSelectQuery$1 = new createSelectQueryBuilder().createSelectQuery;

class SQLGenerator {
  constructor() {
    this._str = '';
    this.createSelectQuery = createSelectQuery$1;
  }
  getCountQuery() {
    return 
  }
}
var main = new SQLGenerator();

exports.SQLGenerator = SQLGenerator;
exports.default = main;
