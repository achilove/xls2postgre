const xlsToJSON = require("excel-to-clean-json");

const json = xlsToJSON.json("./employee.xls", "Employee");


module.exports = json;