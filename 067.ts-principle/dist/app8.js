/* Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
позволяющий генерировать случайные безопасные пароли заданной длины.
Метод generatePassword принимает в качестве параметра длину пароля.
Использовать Generics */
class PasswordGenerator {
    generatePassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
}
