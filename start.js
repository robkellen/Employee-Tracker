const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_trackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  main();
});

function main() {
  inquirer
    .prompt([
      {
        name: "mainOption",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Role",
          "View All Employees by Department",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Role",
          "Quit",
        ],
      },
    ])
    .then(function (response) {
      switch (response.mainOption) {
        case "View All Employees":
          console.log("view all emps");
          break;
        case "View All Employees by Role":
          console.log("view emps by role");
          break;
        case "View All Employees by Department":
          console.log("view all emps by dept");
          break;
        case "Add Employee":
          console.log("add emp");
          break;
        case "Add Role":
          console.log("add role");
          break;
        case "Add Department":
          console.log("add dept");
          break;
        case "Update Employee Role":
          console.log("update emp role");
          break;
        case "Quit":
          process.exit();
      }
    });
}
