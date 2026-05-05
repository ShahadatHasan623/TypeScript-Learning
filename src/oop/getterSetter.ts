class BankAccount {
  public readonly userID: number;
  public userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }
//   userAddBalance(balance:number){
//     this.userBalance = this.userBalance + balance
//   }

  //setter 
  set addBalance(balance:number) {
    this.userBalance = this.userBalance + balance
  }

  //getter
  get getBalance(){
    return this.userBalance
  }
}


// class StudentAccountBank extends BankAccount{
//     test(){
        
//     }
// }

const user1 =new BankAccount(1,"user1",20)
user1.addBalance = 100
user1.addBalance = 20
console.log(user1.getBalance);


