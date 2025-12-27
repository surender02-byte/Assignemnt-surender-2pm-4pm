// Create a class Student with constructor and display() method — make 3 students.

class Student {
    constructor(name1,Rollno) {
        this.name1=name1;
        this.Rollno= Rollno;
    }
    display(){
        console.log(`Name: ${this.name1},role no :${this.Rollno}`);
    }
};
const p1 = new Student ("sure",1);
const p2 = new Student ("abdul",2);
const p3 = new Student ("deeps",3);

p1.display();
p2.display();
p3.display();
