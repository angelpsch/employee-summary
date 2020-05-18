// TODO: Write code to define and export the Employee class
inquirer = require('inquirer'); 

class Employee {
    constructor(id, name, email) {
        this.id = id; 
        this.email = email; 
        this.name = name; 
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id; 
    }
    getEmail(){
        return this.email;
    }
}



module.exports = Employee; 