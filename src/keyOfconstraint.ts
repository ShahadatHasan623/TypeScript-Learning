// keyOf Constraint

type richPeoplesvehicle ={
    car:string,
    cng:string,
    bike:string
}

type myVehicle1 = "car" | "cng" | "bike"
type myVehicle2 = keyof richPeoplesvehicle

const myVehicle:myVehicle2 ="bike"


type User ={
    id:number,
    name:string,
    address:{
        city:string
    }
}

const user:User ={
    id:20,
    name:"shahadat",
    address:{
        city:"Barisal"
    }
}

const getPropertyFromObj =<X>(obj:X,key:keyof X)=>{
    return obj[key]
}

const result1 =getPropertyFromObj(user,"name")
console.log(result1);

const product={
    id:101,
    brand:"Hp"
}

const product1 =getPropertyFromObj(product,"brand")

console.log(product1);