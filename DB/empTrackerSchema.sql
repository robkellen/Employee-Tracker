DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE position_role (
  role_id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (role_id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  emp_id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  emp_role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (emp_ID),
  FOREIGN KEY (emp_role_id) REFERENCES position_role(role_id),
  FOREIGN KEY (manager_id) REFERENCES position_role()
);

SELECT * FROM department;
SELECT * FROM position_role;