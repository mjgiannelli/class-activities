// =============================================================
// PART 1
class MiniBank {
  constructor(balance) {
    this.balance = balance;
    this.getBalance = function () {
      return this.balance;
    };
  }

  // Add a `setBalance()` function
  setBalance(value) {
    this.balance = value;
  }
  //
  // Add a `deposit()` function
  deposit(addition) {
    let newBalance = this.balance + addition;
    this.setBalance(newBalance);
    console.log(`Deposited: ${addition}`);
  }
  //

  // Add a `withdraw()` function
  withdraw(subtraction) {
    let newBalance = this.balance - subtraction;
    this.setBalance(newBalance);
    console.log(`Withdrew: ${subtraction}`);
  }
  //

  printBalance() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

// =============================================================
// PART 2

// Create a new `bank` object
let tdBank = new MiniBank(100);
// Print the `bank` balance
tdBank.printBalance();
// Deposit some money and then print the `bank` balance
tdBank.deposit(35);
tdBank.printBalance();
// Withdraw some money and then print the `bank` balance
tdBank.withdraw(60);

tdBank.printBalance();