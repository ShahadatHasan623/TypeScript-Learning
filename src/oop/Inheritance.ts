class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(NumOfHour: number) {
    console.log(`Eni ${NumOfHour} gonta ghumai `);
  }
}

class Student extends Parent {
  rollNumber: number;
  constructor(name:string,age:number,address:string, rollNumber:number){
       super(name,age,address)
       this.rollNumber = rollNumber
  }
}

const student1 = new Student("Mr.kodu", 20, "Barisal",2001);

student1.getSleep(10);

console.log(student1);

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getTakeClass(takeClassHour: number) {
    console.log(`Eni ${takeClassHour} gonta class ney`);
  }
}

const teacher1 = new Teacher("Mr.Atikur", 20, "barisal", "teacher");

teacher1.getTakeClass(5);
teacher1.getSleep(7);
