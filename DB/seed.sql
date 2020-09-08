USE employee_trackerDB;

-- Dept. Seeds
INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Engineering");
INSERT INTO department (name) VALUE ("Finance");

-- Roles
INSERT INTO role (title, salary, department_id) VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Salesperson", 65000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Lead Engineer", 125000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Software Engineer", 85000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Finance Director", 125000, 3);
INSERT INTO role (title, salary, department_id) VALUE ("Accountant", 70000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, emp_role_id, manager_id) VALUE ("John", "Doe", 1);



