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
        name: "mainOption",
      },
    ])
    .then(function (response) {
      switch (response.mainOption) {
        case "View All Employees":
          viewAllEmps();
          break;
        case "View All Employees by Role":
          viewEmpRoles();
          break;
        case "View All Employees by Department":
          // console.log("view all emps by dept");
          break;
        case "Add Employee":
          // console.log("add emp");
          break;
        case "Add Role":
          // console.log("add role");
          break;
        case "Add Department":
          // console.log("add dept");
          break;
        case "Update Employee Role":
          // console.log("update emp role");
          break;
        case "Quit":
          process.exit();
      }
    });
}

function viewAllEmps() {
  connection.query(
    "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      main();
    }
  );
}

function viewEmpRoles() {
  connection.query("SELECT title FROM role", function (err, res) {
    if (err) console.log(err);
    const roles = [];
    res.forEach((role) => {
      roles.push(role.title);
    });
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which role would you like to view?",
          choices: roles,
          name: "chosenRole",
        },
      ])
      .then(function (response) {
        connection.query(
          `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON role.title = "${response.chosenRole}" AND e.role_id = role.id INNER JOIN department ON role.department_id = department.id`,
          function (err, res) {
            if (err) console.log(err);
            console.table(res);
            main();
          }
        );
      });
  });
}
