const Department = require("./department");

class Role extends Department {
  constructor(role_id, title, salary, department_id){
    super(id, dept_name)
    this.role_id = role_id;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }
  getRoleId(){
    console.log(role_id);
    return this.role_id;
  }
  getTitle(){
    console.log(this.title);
    return this.title;
  }
  getSalary(){
    console.log(this.salary);
    return this.salary;
  }
  getDepartmentId(){
    console.log(this.department_id);
    return this.department_id;
  }
}

module.exports = Role;