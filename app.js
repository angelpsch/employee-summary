const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');


let employees = []; 
let addMember = true; 
let addManager = true; 

function newEmployee() {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What role does this employee hold?',
        choices: ['Intern', 'Engineer', 'Manager', 'No more employees to add'],
      },
    ])  
    .then((res) => {
        switch (res.role) {
            case 'Manager':
                return createManager();
            case 'Engineer':
                return createEngineer();
            case 'Intern':
                return createIntern(); 
            case 'No more employees to add': 
                addMember = false;
                break;  
        }
    })
}


function createManager(){
    return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((res) => {
      employee = new Manager(res.name, res.id, res.email, res.officeNumber);
      employees.push(employee);
    });
}
function createEngineer(){
    return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub?",
      },
    ])
    .then((res) => {
      employee = new Engineer(res.name, res.id, res.email, res.github);
      employees.push(employee);
    });
}
function createIntern(){
    return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((res) => {
      employee = new Intern(res.name, res.id, res.email, res.school);
      employees.push(employee);
    });
}



async function uniteTeam() {
    while(addMember === true){
        if(addManager == true){
            await createManager(); 

            addManager = false; 
        } else {
             await newEmployee(); 
        }
    } 

    const html = render(employees); 

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFile(outputPath, html, (err) => {
        if (err) throw err; 
        console.log('Your team is now united... in HTML. Good luck.');
    });
}

uniteTeam(); 

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
