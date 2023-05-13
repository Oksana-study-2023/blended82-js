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

// const taskButton = document.querySelector("#passwordButton");
// const taskInput = document.querySelector("#passwordInput");
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

//=====================================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

// const decBtn = document.querySelector("#decrease");
// const incBtn = document.querySelector("#increase");
// const box = document.querySelector("#box");

// let boxH = box.getBoundingClientRect().height;
// let boxW = box.getBoundingClientRect().width;

// console.log(boxH, boxW);

// decBtn.addEventListener("click", () => {
//   boxH -= 10;
//   boxW -= 10;

//   box.style.width = `${boxW}px`;
//   box.style.height = `${boxH}px`;
// });

// incBtn.addEventListener("click", () => {
//   boxH += 10;
//   boxW += 10;

//   box.style.width = `${boxW}px`;
//   box.style.height = `${boxH}px`;
// });
//=====================================================

// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey4

// const eventThumb = document.querySelector(".eventThumb");

// document.addEventListener("keydown", pressed);

// function pressed(e) {
//   console.log(e.key, e.code);

//   const { key, code } = e;

//   eventThumb.insertAdjacentHTML("beforeend", createMarkup(key, code));
// }

// function createMarkup(key, code) {
//   return `
//   <ul class="eventList">
//     <li class="eventCode">${code}</li>
//     <li class="eventKey">${key}</li>
//   </ul>
//   `;
// }

// Завдання 16
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.


// const table = document.querySelector("#productTable");
// const productDetails = document.querySelector("#productDetails");

// table.addEventListener('click', show);

// function show(e) {

//   if (e.target.tagName !== 'TD') {
//     return;
//   }

//   const parent = e.target.parentNode.cells;
//   const msg = `${parent[0].textContent} ${parent[1].textContent}`;

//   productDetails.innerHTML = msg;
// };

// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку.При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.

// const greetingMessage = document.querySelector("#greetingMessage");
// const greetingButton = document.querySelector("#greetingButton");
// const input = document.querySelector("#username");

// greetingButton.addEventListener('click', () => {
//   const username = input.value;

//   greetingMessage.innerHTML = `Hello ${username}`;
// });

//TODO:======================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getInfo() {
        return `name ${this.name}, type ${this.type} `
    }
    getFeed() {
        return `Feeding ${this.name} ...`
    }
}

class Bird extends Animal {
   
    constructor(name, type, wingspan) {
        super(name, type)
        this.wingspan = wingspan;
    }

    getInfo() {
        return `${super.getInfo()}, Wingspan: ${this.wingspan}`
    }
}

const eagle = new Bird('jack', 'bird', 72) 

class Mammal extends Animal {
   
    constructor(name, type, size) {
        super(name, type)
        this.size = size;
    }

    getInfo() {
        return `${super.getInfo()}, Size: ${this.size}`
    }
}

const lion = new Mammal('Simba', 'Lion', 104) 

class Zoo {
    constructor() {
        this.animals = []; 
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }

    listAnimals() {
        console.log('Zoo animals: ')
        this.animals.forEach(animal => {
            console.log(animal.getInfo())
        })
    }
}
const zoo = new Zoo() 
zoo.addAnimal(lion)
zoo.addAnimal(eagle)

zoo.listAnimals()