class Department {
  constructor(id, dept_name){
    this.id = id;
    this.dept_name = dept_name;
  }
  getId(){
    console.log(this.id);
    return this.id;
  }
  getDeptName(){
    console.log(this.dept_name);
    return this.dept_name;
  }
}

module.exports = Department;