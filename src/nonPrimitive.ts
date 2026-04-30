//?Non-primitive
//Array , Object

//?Ts - tuple

const bazarList: String[] = ["banana", "apple", "tomato", "oil"];
bazarList.push("Mosala");

const userList: (string | number)[] = ["S", 1, "M", 2, "F", 5];

userList.push("shahadat");

const listName: [string, number] = ["Shahadat", 20];

const fullName: [string, number, string] = [
  "Shahadat",
  20,
  "Diploma In Computer Science",
];

fullName[1] = 30;

// referance type : Object

const user: {
 readonly designation: string;  // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  designation: "Web developer",
  firstName: "Shahadat",
  middleName: "Hossain",
  lastName: "Ismail",
  isMarried: false,
};


console.log(user); 

