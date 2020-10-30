
const orm = require("../config/orm.js");

const burger = {
    selectAll: cbo => {
        orm.all("burgers", res => {
            cbo(res);
        });
    },
   
    insertOne: (cols, vals, cbo) => {
        orm.create("burgers", cols, vals, res => {
            cbo(res);
        });
    },
    updateOne: (objColVals, condition, cbo) => {
        orm.update("burgers", objColVals, condition, res => {
            cbo(res);
        });
    },
    deleteOne: (condition, cbo) => {
        orm.delete("burgers", condition, res => {
            cbo(res);
        });
    }
};

module.exports = burger;