//? Type Alias

type User={
    id:number,
    age:number,
    favouriteColor:string,
    name:{
        firstName:string,
        lastName:string,
    }
    contactNo:string,
    address:{
        divison:string,
        city:string
    }
}



const user1:User={
    id:10,
    age:20,
    favouriteColor:"Black",
    name:{
        firstName:"Shahadat",
        lastName:"Hossain"
    },
    contactNo :"01301608623",
    address:{
        divison:"Barisal",
        city:"Bhola"
    }
}
const user2:User={
    id:10,
    age:20,
    favouriteColor:"Black",
    name:{
        firstName:"Shahadat",
        lastName:"Hossain"
    },
    contactNo :"01301608623",
    address:{
        divison:"Barisal",
        city:"Bhola"
    }
}

type AddFun =(num1:number,num2:number)=>number

const add:AddFun =(num1,num2)=>num1 +num2