import { createSelectQueryBuilder } from '../builder/selectBuilder'
import { createUpdateQueryBuilder } from '../builder/updateBuilder'
import { createInsertQueryBuilder } from '../builder/insertBuilder' 

export declare function createSelectQuery(
  tableName: string,
  tableRename?: string,
): createSelectQueryBuilder {}

export declare function createUpdateQuery(
  tableName: string,
): createUpdateQueryBuilder {}

export declare function createInsertQuery(
  tableName: string,
): createInsertQueryBuilder {}
