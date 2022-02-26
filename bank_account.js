function BankAccountCategoryA(balance) {
  stateHolder.updateState(balance);
  return {
    withdraw(amount) {
      balance -= amount;
      stateHolder.updateState(balance);
    },
    deposit(amount) {
      balance += amount;
      stateHolder.updateState(balance);
    },
    getBalance() {
      return balance;
    },
  };
}

function BankAccountCategoryB(balance) {
  stateHolder.updateState(balance);
  return {
      getBalance() {
      return balance;
    },
  };
}

const bankAccountCatA = BankAccountCategoryA(4000); // for catgory A
const bankAccountCatB = BankAccountCategoryB(4000); // for catgory B

