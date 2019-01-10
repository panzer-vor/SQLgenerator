# SQLgenerator
# 函数解析成SQL语句

- 通过JS函数输入输出成SQL语句的简易工具

generator sql string looks like this:
```javascript
const sqlG = require('sqlG')
sqlG
  .createSelectQuery('table_name')
  .getQuery()
```

output: ```'SELECT * FROM table_name'```

## API

- createSelectQuery
```typescript
createSelectQuery(
  tableName: string,
  tableRename?: string,
)
```
- createUpdateQuery
```typescript
createUpdateQuery(
  tableName: string,
)
```
- createDeleteQuery
```typescript
createDeleteQuery(
  tableName: string,
)
```
- createInsertQuery
```typescript
createInsertQuery(
  tableName: string,
)
```
- createInsertQuery
```typescript
createInsertQuery(
  tableName: string,
) {}
```
- select
```typescript
select(
  fields: {
    [filedsName: string] : string  
  }
)
```
- where
```typescript
where(
  where: string
)
```
- inWhere
```typescript
inWhere(
  where: string[] | number[],
  field: string, 
)
```
- orWhere
```typescript
orWhere(
  where?: string | string[],
  prefix?: 'AND' | 'OR' 
)
```
- andWhere
```typescript
andWhere(
  where?: string | string[],
  prefix?: 'AND' | 'OR' 
)
```
- orderBy
```typescript
orderBy(
  field: string,
)
```
- limit
```typescript
limit(
  start: number,
  size: number,
)
```
- leftJoin
```typescript
leftJoin(
  joinTable: string[],
  condition: string, 
  ...conditions?: string,
)
```
- groupBy
```typescript
groupBy(
  field: string,
)
```
- getQuery
```typescript
getQuery(): string
```
