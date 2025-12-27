// Use prototypes to add a new method to all Student objects dynamically.

function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

Student.prototype.display = function () {
    console.log(`Roll No: ${this.rollNo}, Name: ${this.name}`);
};

Student.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const s1 = new Student("Sure", 1);
const s2 = new Student("Abdul", 2);

s1.display();
s2.sayHello();
