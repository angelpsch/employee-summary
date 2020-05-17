// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require('./Employee'); 


class engineer extends employee {
    constructor(github) {
        this.github = github;
    }
}