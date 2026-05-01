//? Nullable types

const getUser = (input: String | null) => {
  if (input) {
    console.log(`From DB:${input}`);
  } else {
    console.log("From DB : ALL user");
  }
};

getUser(null);

//?Unknown

const discounCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discounPrice] = input.split(" ");

    console.log(Number(discounPrice) * 0.1);
  }
};
discounCalculator(100);
discounCalculator("100 tk");
discounCalculator(null);

//? void

const throwError =(msg:String):never=>{
    throw new Error(msg)
}
throwError("Error....")
