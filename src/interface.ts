type User = {
  name: string;
  age: number;
};

//? Interface Array,Object,function

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "Admin" | "user";
};

interface IUserwithRole extends IUser {
  role: "Admin" | "user";
}

type UserWithRole = User & Role;

const user1: IUserwithRole = {
  name: "Shahadat",
  age: 20,
  role: "Admin",
};

const user2: IUser = {
  name: "Mr.Y",
  age: 22,
};

//function
type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1:number,num2:number):number
}

const add: IAdd = (num1, num2) => num1 + num2;


type Friends = string[]


interface IFriends {
    [index:number]:string
}
const friends : IFriends =["A","B","C"]