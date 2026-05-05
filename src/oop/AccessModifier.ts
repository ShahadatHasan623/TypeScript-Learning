class BankAccount {
  public readonly userID: number;
  public userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  userAddBalance(balance:number){
    this.userBalance = this.userBalance + balance
  }
}


class StudentAccountBank extends BankAccount{
    test(){
        
    }
}

const user1 =new BankAccount(1,"user1",20)
user1.userAddBalance(20) 
console.log(user1);


