// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//The first class is an Employee parent class with the following properties and methods:
    //name
    //id
    //email
    //getName()
    //getId()
    //getEmail()
    //getRole()—returns 'Employee'
//In addition to Employee's properties and methods, Manager will also have the following:
    //officeNumber
    //getRole()—overridden to return 'Manager'

    //Import Employee
    const Employee = require("./Employee.js");

    //Engineer extends from Employee
    class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
        }
        getOfficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return "Manager";
        }
    }

    module.exports = Manager;