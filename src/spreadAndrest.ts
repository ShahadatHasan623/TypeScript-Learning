//? Spread Operator
const friends =["Toslim","bahadur","Sworov","fuhad"]
const schoolFriends = ["Ibrahim","Nayem","Siam","Hamim"]
const collegeFriends =["Sabbir","Tawhid","subroto","Santo","Jakaria","Tamim","Nadim"]

const allFriends =[...friends ,...schoolFriends,...collegeFriends]

console.log(allFriends);

const user ={
    name:"Shahadat",
    age:20
}

const userInfo={
    favouriteColor:"Black",
    hobby:"Badmintion"
}

const allUserInfo ={
    ...user,...userInfo
}

console.log(allUserInfo);

//?Rest Operator

const sendInivit =(...friends:string[])=>{
       friends.forEach((element:string)=>{
        console.log(element);
       })
}

sendInivit("Shadat","Nayem","razib","nadim")