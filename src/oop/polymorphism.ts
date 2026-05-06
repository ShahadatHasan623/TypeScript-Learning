//polymorphism >>> bohurupi

class Person {
  getSleep() {
    console.log("This is a Normal Person. the for sleep  Hour 9");
  }
}

class Student extends Person {
  getSleep() {
    console.log("This is a Student.The for sleep Hour 5");
  }
}

class Teacher extends Person {
  getSleep() {
    console.log("This is a Teacher.The for sleep hour 6");
  }
}

const getSleepHour = (param: Person) => {
  return param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Teacher();

// getSleepHour(person1)
// getSleepHour(person2)
// getSleepHour(person3)

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }
  getArea(): number {
    return Math.PI * this.radious;
  }
}

class Rectangle extends Shape{
    height:number
    width:number
    constructor(height:number,width:number){
        super()
        this.height = height
        this.width =width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getArea =(param:Shape)=>{
    console.log(param.getArea());
}
const shape1 =new Shape()
const shape2 =new Circle(20)
const shape3 =new Rectangle(30,20)

getArea(shape1)
getArea(shape2)
getArea(shape3)