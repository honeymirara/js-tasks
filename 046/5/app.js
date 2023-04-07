// Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client{
    doRegistration =() => {
        let mailTag = document.querySelector('.mail');
        let passwordTag = document.querySelector('.password');
        let buttonTag = document.querySelector('button');
        
        buttonTag.addEventListener('click', ()=> {
            mailTag.innerHTML = mailTag.value
        })
    }

    
}

class Server{

}

const client = new Client();
client.doRegistration();
