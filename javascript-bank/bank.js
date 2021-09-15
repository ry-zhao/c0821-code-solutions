/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber++, holder);
  newAccount.transactions.push(new Transaction('deposit', balance));
  this.accounts.push(newAccount);
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var j = 0; j < this.accounts.length; j++) {
    for (var k = 0; k < this.accounts[j].transactions.length; k++) {
      if (this.accounts[j].transactions[k].type === 'deposit') {
        totalAssets += this.accounts[j].transactions[k].amount;
      } else {
        totalAssets -= this.accounts[j].transactions[k].amount;
      }
    }
  }
  return totalAssets;
}
;
