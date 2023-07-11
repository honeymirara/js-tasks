/* Создать интерфейс iValidation. Создайте класс Validation с приватными методами
isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
Validation. Конструктор принимает поля email, date, path и инициализирует их как
поля класса. В каждом методе напишите соответствующую проверку */


/* interface iValidation {
    isValidEmail(email: string): boolean;
    isValidDate(date: string): boolean;
    isValidPath(path: string): boolean;
  }
  
  class Validation9 implements iValidation {
    private email: string;
    private date: string;
    private path: string;
  
    constructor(email: string, date: string, path: string) {
      this.email = email;
      this.date = date;
      this.path = path;
    }
  
    private isValidEmail(email: string): boolean {
      return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    }
  
    private isValidDate(date: string): boolean {
      return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }
  
    private isValidPath(path: string): boolean {
      return /^[a-zA-Z0-9\/.-]+$/.test(path);
    }
  
  } */
  