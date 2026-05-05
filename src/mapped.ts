const user = {
  id: 222,
};

type ArrayOfNum = {
  height: number;
  width: number;
};

type height = ArrayOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> ={
    [key in keyof T]:T[key]
}


const area1: Area<{height:string; width:boolean}> ={
    height :"50",
    width : false
}

