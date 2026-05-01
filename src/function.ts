//? Function
// Normal Function ,Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const numArr = (num1: number, num2: number): number => num1 + num2;

//Object => function => method

const poorUser ={
    name:'Shahadat',
    balance:20,
    addBalance(value:number):number{
        const total = this.balance + value;
        return total
    }
}

//loop function

const arr:number[] =[1,2,5]

const arrNumber =arr.map((ele:number):number=>ele * ele )
console.log(arrNumber);