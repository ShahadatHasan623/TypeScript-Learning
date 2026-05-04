//? generic function

// const createArrayWithString =(value:string)=>[value]

// const createArrayWithNumber =(value:number) =>[value]

// const createArraywithObject =(value:{
//     id:number,
//     name:string
// })=>{
//     return [value]
// }

const createArrayWithGeneric =<T>(value:T)=>{
    return [value]
}

const arrStr =createArrayWithGeneric("Apple")
const arrNum =createArrayWithGeneric(222)
const arrwithobj =createArrayWithGeneric({
    id:123,
    name:"Shahadat"
})

//tuple 

const createArrayTuple =(param1:string,param2:number)=>{
    return [param1,param2]
}

const createArrayWithTupleGenerics =<X,Y>(param1:X,param2:Y)=>{
    return [param1,param2]
}

const res1 =createArrayWithTupleGenerics('2222',"Shahadat")
const res2 = createArrayWithTupleGenerics(2222,{
    id:120,
    name:"Shakil"
})

//

const addStudentToCourse =<T>(studentInfo:T)=>{
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

const result1 =addStudentToCourse(student1)
const result2 = addStudentToCourse(student2)
console.log(result1,[result2]);