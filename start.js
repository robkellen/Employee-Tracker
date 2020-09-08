const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch (){
  inquirer.prompt([
    {
      name: "addCategory",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee"
      ],
    }
  ]).then(function(response){
    if (response === "Add Department"){
      console.log("add dept");
    } else if (response === "Add Role"){
      console.log("add role");
    } else if (response === "Add Employee"){
      console.log("add emp");
    }
    console.log(response);
  })
}

