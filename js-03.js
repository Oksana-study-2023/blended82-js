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

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply

// class Calculator {
//     constructor(){
//         this.number = 0;
//     }

//     get resultCalc(){
//         return this.number;
//     }    

//     addCalc(number){
//         return this.number = this.number + number;
//     }

//     substruct(number){
//         return this.number -= number;
//     }

//     divide(number){
//         if (number !== 0){
//             return this.number /= number;
//         }
//     }

//     multiply(number){
//         return this.number *= number;
//     }

// }
// const calc = new Calculator();
// // console.log(calc.addCalc(5));
// // console.log(calc.addCalc(10));
// // console.log(calc.substruct(7));

// calc.addCalc(5);
// calc.addCalc(10);
// calc.substruct(7);
// calc.divide(-2);
// calc.multiply(3);
// console.log(calc.resultCalc);
