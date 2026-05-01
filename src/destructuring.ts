//? Object destructuring
//? Array destructuring

// Object destructuring

const user = {
  age: 20,
  id: 1,
  name: {
    firstName: "Shahadat",
    middleName: "Hasan",
    lastName: "Ismail",
  },
  favouriteColor: "Black",
};

const {
  age,
  name: { middleName: myMiddleName },
} = user;

console.log(myMiddleName);

//? Array destructuring

const namArr = ["S", "M", "F"];

const [,myName,] =namArr
console.log(myName);