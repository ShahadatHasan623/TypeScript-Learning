//? generic with interface

interface Developer<T,X=null>{
    name:string,
    salary:number,
    device:{
        brand:string,
        model:string,
        releasedYear:string
    },
    smartWatch:T,
    bike?:X
}

interface brandChara{
    heartRate:string,
    stopwatch:boolean
}

interface appleWatch{
    heartRate:string,
    callSupport:boolean,
    calculator:boolean,
    AiFeature:boolean
}


const poorDeveloper :Developer<brandChara,{
    brand:string,engineCapacity:string
}> ={
    name:"shahadat",
    salary:20,
    device:{
        brand:"smasung",
        model:"A50",
        releasedYear:"2010"
    },
    smartWatch:{
        heartRate :"200",
        stopwatch:true
    },
    bike:{
        brand:'yahama',
        engineCapacity:'2000cc'
    }
}

const richDeveloper :Developer<appleWatch> ={
    name:"shahadat",
    salary:20,
    device:{
        brand:"smasung",
        model:"A50",
        releasedYear:"2010"
    },
    smartWatch:{
        heartRate :"200",
        callSupport:true,
        calculator:true,
        AiFeature:true
    }
}