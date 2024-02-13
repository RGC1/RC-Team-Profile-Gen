// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//The first class is an Employee parent class with the following properties and methods:
    //name
    //id
    //email
    //getName()
    //getId()
    //getEmail()
    //getRole()—returns 'Employee'
//In addition to Employee's properties and methods, Engineer will also have the following:
    //github—GitHub username
    //getGithub()
    //getRole()—overridden to return 'Engineer'

    //Import Employee
    const Employee = require("./Employee");

    //Engineer extends from Employee
    class Engineer extends Employee {
        constructor (name, id, email, github) {
            super(name, id, email);
            this.github = github;
        }
        getGithub() {
            return this.github;
        }
        getRole() {
            return "Engineer";
        }
    
    }

    module.exports = Engineer;