// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require('./Employee'); 


class intern extends employee {
    constructor(school) {
        this.school = school;
    }
}