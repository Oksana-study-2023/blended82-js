//TODO:===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 8
// if (a === 10) {
//     console.log("Вірно")
// } else { console.log("Невірно") }

// a === 10 ? console.log("Вірно") : console.log("Невірно")

//TODO:===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).
// const a = 46
// if (a < 15) {
//     console.log("Перша чверть")
// } else if (a >= 15 && a < 30) {
//     console.log("Друга чверть")
// } else if (a >= 30 && a < 45) {
//     console.log("Третя чверть")
// } else { console.log("Четверта чверть") }

//TODO:===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;
// let result = "";

// switch (num) {
//     case 1:
//         result = "Winter"
//         break;
//     case 2:
//         result = "Spring"
//         break;
//     case 3:
//         result = "Summer"
//         break;
//     case 4:
//         result = "Autumn"
//         break;

//     default:
//         result = "Error"
//         break;
// }
// console.log(result)

//TODO:===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const result = prompt("Яка офіційна назва JavaScript?")
// console.log(result);

// if (result === "ECMAScript") {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }

//TODO:===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;
// // for (let i = max; i >= min; i--) {
// // console.log(i);
// // }

// for (let i = min; i <= max; i++) {
//         if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//TODO:===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("enter login");
// if (login === "admin") {
//   const pass = prompt("enter password");
//   if (pass) {
//     if (pass === "i am a boss") {
//       console.log("have a nice day");
//     } else {
//       console.log("access denied");
//     }
//   } else {
//     console.log("cancelled");
//   }
// } else {
//   console.log("i dont know you");
// }

//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// let value = Number(prompt("Please enter a number"));
// let total = 0;
// let check = false;
// do {
//   if (value) {
//     check = true;
//     total += value;
//     value = Number(prompt("Please enter a number"));
//   } else {
//     check = false;
//     alert(`Total amount is ${total}`);
//   }
// } while (check);

//TODO:===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const a = "abcde";

// if (a[0] === "a") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//TODO:===================================
// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = prompt("Which browser do you use?");

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }
