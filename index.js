const inquirer = require('inquirer');
const {
  getEmployees,
  addEmployee,
  updateEmployeeRole,
  getRoles,
  addRole,
  getDepartments,
  addDepartment,
} = require("./queries");

const mainMenu = async () => {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit',
            ]
        }
    ]);

    switch (action) {
        case 'View All Employees':
            const employees = await getEmployees();
            console.table(employees);
            break;
        case 'Add Employee':
            const employeeAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'Enter the employee first name:'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Enter the employee last name:'
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Enter the employee role ID:'
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'Enter the manager ID (leave blank if none):',
                }
            ]);
            await addEmployee(
                employeeAnswers.first_name, 
                employeeAnswers.last_name,
                employeeAnswers.role_id,
                employeeAnswers.manager_id);
            console.log(`Added employee ${employeeAnswers.first_name} ${employeeAnswers.last_name} to the database`);
        case 'Update Employee Role':
            const updateAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employee_id',
                    message: 'Enter the employee ID to update:'
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Enter the new role ID:'
                }
            ]);
            await updateEmployeeRole(updateAnswers.employee_id, updateAnswers.role_id);
            console.log(`Updated employee ID ${updateAnswers.employee_id} with role ID ${updateAnswers.role_id} to the database.`);
            break;   
        case 'View All Roles':
            const roles = await getRoles();
            console.table(roles);
            break;
        case 'Add Role':
            const roleAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the role title:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the role salary:'
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'Enter the department ID for this role:'
                }
            ]);
            await addRole(
                roleAnswers.title, 
                roleAnswers.salary, 
                roleAnswers.department_id
            );
            console.log(`Added role ${roleAnswers.title} to the database.`);
            break;
        case 'View All Departments':
            const departments = await getDepartments();
            console.table(departments);
            break;
        case 'Add Department':
            const { name } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the department name:'
                }
            ]);
            await addDepartment (name);
            console.log(`Added department ${name} to the database`);
            break;
        case 'Quit':
            process.exit();
    }

    mainMenu();
};

mainMenu();