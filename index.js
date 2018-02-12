const xlsToJson = require('./xlsParser');
const db = require('./db');
const mongoSql = require('mongo-sql'); 


function insertXls(arrayOfObject) {

    
    for (let item of arrayOfObject) {

        const { query, values } = mongoSql.sql({
            type: 'insert',
            table: 'employee',
            values: item
        });
        console.log(query, values);
        db.query(query, values).then(({ rows }) => rows);
    }

}


insertXls(xlsToJson);



