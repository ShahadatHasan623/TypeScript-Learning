// constraint : rules

type Student ={id:number, name:string}

const addStudentToCourse =<T extends Student>(studentInfo:T)=>{
    return{
        course:"NextLevel",
        ...studentInfo
    }
}

const student1={
    id:1,
    name:"shahadat",
    hasPen:true
}

const student2 ={
    id:2,
    name:"jhankar mahabub",
    hasCar:true,
    isMarried:true
}
const student3={
    id:3,
    name:"kodu",
    hasWatch:true
}

const result =addStudentToCourse(student3)