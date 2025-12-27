// Create a class Employee with name and salary — add a method to display info.

class Employee{
    constructor(name , salary){
        this.name=name;
        this.salary=salary;
    }
    displayinfo(){
        console.log(`this is ${this.name}, salaary:${this.salary}`);
        
    }
}
const p1=  new Employee ( "sure", 10000);
p1.displayinfo();