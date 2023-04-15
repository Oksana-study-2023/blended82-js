// // Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// function min(a, b) {
//   return a > b ? b : a;
//   //     if (a > b) {
//   //     return b;
//   //   }

//   //   return a;
// }
// console.log(min(1, 5));

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// console.log(styles);
// styles[1] = "Класика";
// console.log(styles);
// styles.splice(0, 1);
// styles.unshift("Реп", "Рeггі");
// console.log(styles);

// ---У нас є об'єкт, в якому зберігатимуться зарплати
// Нашої команди
// Напишіть код для сумування всіх зарплат і
// Збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// let total = 0;
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 170,
// };

// for (const salary of Object.values(salaries)) {
//   total += salary;
// }
// console.log(total);

//Напишіть функцію, яка приймає два аргументи і повертає всі числа,
   // які діляться на дільник.Перший аргумент – це масив чисел, а другий – дільник.


// function func(array, num) {
//     const newArray = [];

//     for (const number of array) {
//         console.log(number)
//         if (number % num === 0) {
//             newArray.push(number)
//         }

//     }
//     return newArray;
// }
       

// console.log(func([1, 2, 3, 4, 5, 6, 7, 8], 2));
// Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково
// читається як у звичному напрямку, так і у зворотному.Наприклад,
//     "Anna" - це паліндром, а "table" і "John" - ні.
// function palindrom(string) {
//     string = string.toLowerCase();
//     const isPolindrom = string.split('').reverse().join('');
//     return isPolindrom === string ? true : false;
// }
// console.log(palindrom('John'));
// // Потрібно написати функцію, яка приймає рядок як аргумент і
// повертає кількість голосних, які містяться в рядку.
// // Голосними є "a", "e", "i", "o", "u".
// function vowels(string) {
//     string = string.toLowerCase();
//     const vowelsArray = ["a", "e", "i", "o", "u"];
//     let counter = 0;
//     for (const char of string) {
//         if (vowelsArray.includes(char)) {
//             counter += 1;
//         }
//     }
//     return counter;
// }

// console.log(vowels('vowels'));
// Напишіть ф-цію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів та
// рядок під назвою каменю.
// Функція  повертає загальну вартість каменів
// з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//     for (const stone of stones) {
//         const { name, price, quantity } = stone;
//         if (name === stonesName) {
//             return price * quantity;
//         }
    
//     }

//     return `Такого каменю немає`;
// }
// console.log(calcTotalPrice(stones, "Бриллиант"));


// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// mult() перемножує збережені значення та повертає результат

// const calculator = {

//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mult() {
//         return this.a * this.b;
//     }

// }

// console.log(calculator.read(2, 5));
// console.log(calculator.mult());