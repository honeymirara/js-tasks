/* Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
(withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
только через методы класса. Реализуйте проверку на достаточность средств
перед снятием со счета. */
class Account {
    balance = 0;
    deposit(value) {
        this.balance += value;
        return this.balance;
    }
    withdraw(value) {
        this.balance -= value;
        return this.balance;
    }
}
let acc = new Account();
console.log(acc.deposit(100));
console.log(acc.withdraw(50));
