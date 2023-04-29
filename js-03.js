//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get client() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const firstClient = new Client('Dog', 'dog@gmail.com');
// console.log(firstClient.client);
// firstClient.email = 'cat@gmail.com';
// console.log(firstClient.client);