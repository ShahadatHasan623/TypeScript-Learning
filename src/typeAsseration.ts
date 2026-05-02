let anything :any

anything = "Mezba";
(anything as string)


const kgToGMConverter =(input:String |Number | undefined)=>{
    if(typeof input === "number"){
        return input*1000
    }
    else if(typeof input === "string"){
        const [value] =input.split(" ")
        return `Converted  gm: ${(Number(value)*1000)}`
    }
}

const result1 =kgToGMConverter(2) as number;
console.log(result1);
const result2 =kgToGMConverter("2 tk") as string;
console.log(result2)