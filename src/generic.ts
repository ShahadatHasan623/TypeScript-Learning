// dynamically generalize : generic

//? Generic

type GenericArray<T> =Array<T>

// const friends: string[] = ["A", "B", "Y", "X"];

const friends: GenericArray<string> = ["A", "B", "Y", "X"];

// const rollNumber: number[] = [2, 5, 6, 8, 10];

const rollNumber: GenericArray<number> = [2, 5, 6, 8, 10];

// const isEligibleList:boolean[] = [true,false]

const isEligibleList: GenericArray<boolean> = [true, false];


const numberList:GenericArray<{name:string,age:number}> =[
    {
        name:"Mr.X",
        age:70
    },
    {
        name:"Mr.Y",
        age:70
    },
    {
        name:"Mr.Z",
        age:70
    }
]


type cordinates<X,Y>= [X,Y]

const cordinates1:cordinates<number,number> =[1,2]
const cordinates2:cordinates<number,string> =[1,'2']