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

// Задача 3
// // Напиши class CarsManager  який створює об'єкти
// Для управління салону автомобілів. Використати приватну змінну cars
// Додай методи класу:
// getModels() - повертайте масив усіх моделей
// changeModel(oldModelName, newModelName) - Замінює стару модель на ному
// getTotalPrice() - отримує суму усіх автомобілів
// getMake(make) - повертає масив виробника
// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
// ];

// class CarsManager {
//   #cars;
//   constructor(cars = []) {
//     this.#cars = cars;
//   }
//   get cars() {
//     return this.#cars;
//   }
//   getModels() {
//     return this.#cars.map((mod) => mod.model);
//   }

//   changeModel(oldModelName, newModelName) {
//     this.#cars.forEach((car) => {
//       if (car.model === oldModelName) {
//         car.model = newModelName;
//       }
//     });
//   }

//   getTotalPrice() {
//     return this.#cars.reduce((previousValue, car) => {
//       return previousValue + car.price;
//     }, 0);
//   }

//   getMake(make) {
//     return this.#cars.filter((car) => car.make === make);
//   }
// }

// const manager = new CarsManager(vehicles);
// manager.changeModel("CR-V", "A-80");
// console.log(manager.getModels());
// // console.log(manager.cars);
// console.log(manager.getTotalPrice());
// console.log(manager.getMake("Toyota"));
