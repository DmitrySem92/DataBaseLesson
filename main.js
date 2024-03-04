import { makeEmployee, makeEmployeeDB } from './employee';

const employeeDB = makeEmployeeDB();

const employee1 = makeEmployee('John Doe', 'Software Engineer', 'Engineering');
const employee2 = makeEmployee('Jane Smith', 'Product Manager', 'Product Management');

employeeDB.addEmployee(employee1);
employeeDB.addEmployee(employee2);

console.log(employeeDB.getAllEmployees());

employeeDB.updateEmployee('John Doe', { position: 'Senior Software Engineer' });
console.log(employeeDB.getAllEmployees());

employeeDB.removeEmployee('Jane Smith');
console.log(employeeDB.getAllEmployees());