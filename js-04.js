//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const taskButton = document.querySelector("#alertButton");
// const taskInput = document.querySelector("#alertInput");

// taskButton.addEventListener("click", () => {
//   console.log(taskInput.value);
// });

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const taskButton = document.querySelector("#swapButton");
// const taskLeftInput = document.querySelector("#leftSwapInput");
// const taskRightInput = document.querySelector("#rightSwapInput");

// taskButton.addEventListener("click", () => {
//   const inputChange = taskLeftInput.value;
//   taskLeftInput.value = taskRightInput.value;
//   taskRightInput.value = inputChange;
// });

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const taskButton = document.querySelector("#passwordButton");
const taskInput = document.querySelector("#passwordInput");
// let flag = true;
// let hiddenText;

// taskButton.addEventListener("click", () => {
//   if (flag) {
//     hiddenText = taskInput.value;
//     taskInput.value = "";
//     console.log(hiddenText);
//     taskButton.textContent = "Open";
//     flag = false;
//   } else {
//     flag = true;
//     taskInput.value = hiddenText;
//     taskButton.textContent = "Hidden";
//   }
// });

// taskButton.addEventListener("click", () => {
//   console.log(taskInput.type);
//   if (taskButton.textContent === "Hidden") {
//     taskInput.type = "password";
//     taskButton.textContent = "Open";
//   } else {
//     taskInput.type = "text";
//     taskButton.textContent = "Hidden";
//   }
// });
