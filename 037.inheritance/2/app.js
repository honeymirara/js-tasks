/* Классы Person и Customer. Напишите класс Person с атрибутами данных для
имени, адреса и телефонного номера человека. Затем напишите класс Customer
(Клиент), который является подклассом класса Person. Класс Customer должен
иметь поле для номера клиента и атрибут булевых данных,
указывающий, хочет ли клиент быть в списке рассылки или нет.
Продемонстрируйте экземпляр класса Customer в простой программе */

class Person{
    name;
    address;
    phoneNumber;

    getName(){
        return this.name;
    }

    getAddress(){
        return this.address;
    
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    setName(name){
       this.name = julia; 
    }

    setAddress(addr){
        this.address = Minsk;
    
    }

    setPhoneNumber(number){
        this.phoneNumber = 758694;
    }
}

class Customer{

}

