export const makeEmployeeDB = () => {
    const employees = [];
  
    const addEmployee = (employee) => {
      employees.push(employee);
    };
  
    const removeEmployee = (name) => {
      const indexToRemove = employees.findIndex((employee) => employee.name === name);
      if (indexToRemove !== -1) {
        employees.splice(indexToRemove, 1);
      }
    };
  
    const updateEmployee = (name, updatedData) => {
      const employeeToUpdate = employees.find((employee) => employee.name === name);
      if (employeeToUpdate) {
        Object.assign(employeeToUpdate, updatedData);
      }
    };
  
    const getAllEmployees = () => [...employees];
  
    return {
      addEmployee,
      removeEmployee,
      updateEmployee,
      getAllEmployees,
    };
  };