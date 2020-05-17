// TODO: Write code to define and export the Employee class
class employee {
    constructor(id, name, role, email) {
        this.id = id; 
        this.email = email; 
        this.role = ['Manager', 'Engineer', 'Intern'];
        this.name = name;  
    }
}



module.exports = employee; 