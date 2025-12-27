// Create another class Manager that inherits from Employee and adds a department.
class Employee{
    constructor(name , salary){
        this.name=name;
        this.salary=salary;
    }
    displayinfo(){
        console.log(`this is ${this.name}, salaary:${this.salary}`);
        
    }
};


class manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
    }
    displayedmanagerinfo(){
        console.log(`i am : ${this.name}, salary : ${this.salary},department:${this.department}`);
        
    }
};
const p1=  new Employee ( "sure", 100000);
const m1 = new manager ("sure",100000,"HR");

p1.displayinfo();
m1.displayedmanagerinfo();