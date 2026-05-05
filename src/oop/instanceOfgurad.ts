class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(sleepHour: number) {
    console.log(`${this.name} manush ta doinik ${sleepHour} gonta ghumai`);
  }
}
class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(studyHour: number) {
    console.log(`${this.name} doinik ${studyHour} gonta pore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  doTeacher(TeachingHour: number) {
    console.log(`${this.name} doinik ${TeachingHour} gonta porai `);
  }
}

//function gurad

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.doTeacher(7);
  } else {
    user.getSleep(14);
  }
};

const teacher1 = new Teacher("Mr.Mezba");
const student1 = new Student("Mr.Salim");
const person1 = new Person("Mr.Rafi");

getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);
