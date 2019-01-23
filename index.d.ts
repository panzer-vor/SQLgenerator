interface IWhere {
  [key: string, value: string | number, link?: string]: string | number
}
export declare function where(
  where: IWhere
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function inWhere(
  where: string[] | number[],
  field: string, 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function orWhere(
  where: IWhere | IWhere[],
  prefix?: 'AND' | 'OR' 
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function andWhere(
  where: IWhere | IWhere[],
  prefix?: 'AND' | 'OR'
): createSelectQueryBuilder | createUpdateQueryBuilder | createDeleteQueryBuilder {}

export declare function select(
  fields: [string[]]
): createSelectQueryBuilder | createUpdateQueryBuilder | createInsertQueryBuilder | createDeleteQueryBuilder {}

export declare function orderBy(
  field: string,
): createSelectQueryBuilder {}

export declare function limit(
  start: number,
  size: number,
): createSelectQueryBuilder {}

export declare function leftJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
): createSelectQueryBuilder | createDeleteQueryBuilder {}

export declare function innerJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
): createSelectQueryBuilder | createDeleteQueryBuilder {}

export declare function groupBy(
  field: string,
): createSelectQueryBuilder {}

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

export declare function createDeleteQuery(
  tableName: string,
  tableRename?: string,
): createDeleteQueryBuilder {}

export declare class createUpdateQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public createUpdateQuery: createUpdateQuery
  public input(str: string): createUpdateQueryBuilder
  public getQuery(): string
}

export declare class createSelectQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public leftJoin: leftJoin
  public createSelectQuery: createSelectQuery
  public input(str: string): createSelectQueryBuilder
  public getQuery(): string
}

export declare class createInsertQueryBuilder{
  static _str: string
  public select: select
  public createInsertQuery: createInsertQuery
  public input(str: string): createInsertQueryBuilder
  public getQuery(): string
}

export declare class createDeleteQueryBuilder{
  static _str: string
  public select: select
  public where: where
  public inWhere: inWhere
  public andWhere: andWhere
  public orWhere: orWhere
  public leftJoin: leftJoin
  public innerJoin: innerJoin
  public createDeleteQuery: createDeleteQuery
  public input(str: string): createDeleteQueryBuilder
  public getQuery(): string
}
