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
          viewEmpDept();
          break;
        case "Add Employee":
          addEmp();
          break;
        case "Add Role":
          addRole();
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

function viewEmpDept() {
  connection.query("SELECT name FROM department", function (err, res) {
    if (err) console.log(err);
    const departments = [];
    res.forEach((department) => {
      departments.push(department.name);
    });
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which department would you like to view?",
          choices: departments,
          name: "chosenDept",
        },
      ])
      .then(function (response) {
        connection.query(
          `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, " " ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.name = "${response.chosenDept}"`,
          function (err, res) {
            if (err) throw err;
            console.table(res);
            main();
          }
        );
      });
  });
}

function addEmp() {
  connection.query("SELECT title FROM role", function (err, res) {
    if (err) console.log(err);
    const roles = [];
    res.forEach((role) => {
      roles.push(role.title);
    });
    connection.query(
      `SELECT CONCAT(e.first_name, ' ' , e.last_name) AS name FROM employee e`,
      function (err, res) {
        if (err) console.log(err);
        const managers = [];
        res.forEach((manager) => managers.push(manager.name));
        inquirer
          .prompt([
            {
              message: "What is the first name of your new employee?",
              name: "new_first_name",
            },
            {
              message: "What is the last name of your new employee?",
              name: "new_last_name",
            },
            {
              type: "list",
              message: "What will be your new employee's role?",
              choices: roles,
              name: "new_role",
            },
            {
              type: "list",
              message: "Who will be the manager of your new employee?",
              choices: managers,
              name: "new_manager",
            },
          ])
          .then(function (response) {
            connection.query(
              `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${response.new_first_name}", "${response.new_last_name}", (SELECT id FROM role WHERE role.title = "${response.new_role}"), (SELECT id FROM employee e WHERE CONCAT(e.first_name, ' ',e.last_name) = "${response.new_manager}"))`
            );
            console.log(
              `${response.new_first_name} ${response.new_last_name} successfully added!`
            );
            main();
          });
      }
    );
  });
}

function addRole() {
  connection.query(`SELECT name FROM department`, function (err, res) {
    if (err) console.log(err);
    const departments = [];
    res.forEach((department) => {
      departments.push(department.name);
    });
    inquirer
      .prompt([
        {
          message: "What is the title of the new role you would like to add?",
          name: "new_title",
        },
        {
          message: "What is the salary associated with this role?",
          name: "new_salary",
        },
        {
          type: "list",
          message: "Which department will this new role be associated with?",
          choices: departments,
          name: "department",
        },
      ])
      .then(function (response) {
        connection.query(
          `INSERT INTO role (title, salary, department_id) VALUE ("${response.new_title}", ${response.new_salary}, (SELECT id FROM department WHERE department.name = "${response.department}"))`
        );
        console.log(
          `${response.new_title} has been added to ${response.department}`
        );
        main();
      });
  });
}
