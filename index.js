const employee = {name: "Jeff", streetAddress: "Black st"}// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
      delete newEmployee[key];
      return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}