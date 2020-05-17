// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require('./Employee'); 


class manager extends employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}