// Import MySQL connection.
const connection = require("../config/connection.js");

const printQuestionMarks = num => {
    let array = [];
  
    for (let i = 0; i < num; i++) {
      array.push(`?`);
    }
  
    return array.toString();
}



const objToSql = obj => {

    let array = [];
  
    for (let key in obj) {
      let value = obj[key];
      
      if (Object.hasOwnProperty.call(obj, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = `'${value}'`;
        }
        
        array.push(`${key} = ${value}`);
      }
    }
  
    return array.toString();

}


const orm = {

    all: (tableInput, cbo) => {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cbo(result);
      });
    },

    create: (table, cols, values, cbo) => {
      
        let InsertqueryString = "INSERT INTO " + table+ "("+cols.toString()+")" + "VALUES (" + printQuestionMarks(values.length) +")"  ;
     
        console.log(InsertqueryString);
    
        connection.query(InsertqueryString, values, function(err, result) {
          if (err) {
            throw err;
          }
    
          cbo(result);
        });
    },
    update: (table, objColVals, condition, cbo) => {
     
        let updatequeryString = `UPDATE ${table}`+  ` SET `+objToSql(objColVals)+` WHERE `+condition ;
      
        console.log(updatequeryString);
        connection.query(updatequeryString, (err, result) => {
        if (err) {
            throw err;
        }

        cbo(result);
        });
    },
    delete: (table, condition, cbo) => {
      let DeletequeryString = "DELETE FROM " + table + " WHERE "+condition;
     
  
      connection.query(DeletequeryString, function(err, result) {
        if (err) {
          throw err;
        }
        cbo(result);
      });
    }

}
module.exports = orm;