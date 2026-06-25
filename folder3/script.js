console.log("hello");

let b=6;
function sayHello(){
    let c=10;
    console.log("hello hy");
}

console.log(a);
sayHello();
console.log(b);

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${balance}`);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New balance: ${balance}`);
            } else {
                console.log(`Insufficient funds. Current balance: ${balance}`);
            }
        },

        getBalance() {
            console.log(`Current balance: ${balance}`);
            return balance;
        }
    };
}

// Example Usage
const account = createBankAccount(1000);

account.deposit(500);      
account.withdraw(300);     
account.withdraw(1500);   
account.getBalance();      