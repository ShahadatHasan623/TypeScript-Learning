// ?:Ternary operator ---> decision making
// ?? : nullish coalescing ---> null/undefined
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  // if(age >= 21){
  //     console.log('you are eligible');
  // }
  // else{
  //     console.log('you are a not eligible !');
  // }

  const result = age >= 21 ? "you are eligible" : "you are a not eligible !";
  console.log(result);
};

biyerJonnoEligible(20);

// ?? nullish operator

const userTheme = null;
const selectedTheme = userTheme ?? "light theme";
console.log(selectedTheme);

const isAuthenticated = "";

const ternaryAuthenticated = isAuthenticated
  ? isAuthenticated
  : "You are guest !";

const nullishAuthenticated = isAuthenticated ?? "You are guest";

console.log({ ternaryAuthenticated }, { nullishAuthenticated });

//optional chaining ----> ?

const userData: {
  age: number;
  name: {
    firstName: string;
    lastName: string;
  };
  address: {
    division: string;
    city: string;
  },
  contactNo:string
} = {
  age: 20,
  name: {
    firstName: "shahadat",
    lastName: "hossain",
  },
  address: {
    division: "Barisal",
    city: "Bhola",
  },
  contactNo: "017",
};
