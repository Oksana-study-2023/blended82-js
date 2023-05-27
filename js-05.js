// ЗАДАЧА 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

/* <form id="login-form">
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button name="button" type="submit">Login</button>
    </form> */

// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// const formEl = document.querySelector('#login-form');
// const { email, password, button } = formEl.elements;
// const formData = {};
// const savedData = JSON.parse(localStorage.getItem('form-data'));
// onReload();

// formEl.addEventListener('submit', onFormSubmit);

// function logout() {
//     localStorage.removeItem('form-data');
//         button.textContent = "login";
//         email.removeAttribute('disabled');
//         password.removeAttribute('disabled');
// }


// function onLogin() {
//     button.textContent = 'logout';
//     email.disabled = true;
//     password.disabled = true;
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     if (button.textContent === 'logout') {
//         logout();
//         return;
//     };

//     if (email.value === USER_DATA.email && password.value === USER_DATA.password) {
//         formData.email = email.value;
//         formData.password = password.value;
//         localStorage.setItem('form-data', JSON.stringify(formData));
//         onLogin();
//         formEl.reset();
//     }

// }

// function onReload() {
//     if (savedData) {
//         onLogin();
//     }
// }

// ЗАДАЧА 2

/* <form id="task-form">
  <input type="text" name="taskName" />
  <button type="submit">Добавить</button>
</form>;
<ul id="task-list"></ul>

*/

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const formEl = document.querySelector("#task-form");
// const listEl = document.querySelector("#task-list");
// const { taskName } = formEl.elements;

// let listData = [];

// formEl.addEventListener("submit", onSubmit);
// listEl.addEventListener("click", onClick);

// function onClick(e) {
//   console.log(e.target.dataset.index);

//   const elInd = e.target.dataset.index;

//   listData.splice(elInd, 1);
//   saveData();

//   createMarkup();
// }

// function saveData() {
//   localStorage.setItem("tasks", JSON.stringify(listData));
// }

// function onSubmit(e) {
//   e.preventDefault();
//   listData.push({ task: taskName.value });

//   saveData();

//   createMarkup();

//   formEl.reset();
// }

// function createMarkup() {
//   const markup = listData
//     .map((item, index) => {
//       return `
//         <li>${item.task}
//             <button data-index=${index}>x</button>
//         </li>
//     `;
//     })
//     .join("");

//   listEl.innerHTML = markup;
// }

// window.onload = () => {
//   listData = JSON.parse(localStorage.getItem("tasks"));

//   if (listData) {
//     createMarkup();
//   }
// };

// ЗАДАЧА 3
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

//  <div class="checkbox-thumb">
//       <input type="checkbox" id="checkbox" class="checkbox" />
//       <label class="theme-toggle" for="checkbox"></label>
//       <div class="checkbox-circle"></div>
//     </div>

const inputEl = document.querySelector('#checkbox');
const bodyEl = document.querySelector('body');
inputEl.addEventListener('change', onChange);
onLoad();
function onChange() {
  if (inputEl.checked === true) {
    localStorage.setItem('theme', 'dark')
    bodyEl.classList.add('dark');
    bodyEl.classList.remove('light');
  }

  if (inputEl.checked === false) {
    localStorage.setItem('theme', 'light')
    bodyEl.classList.add('light');
    bodyEl.classList.remove('dark');
  }
}

function onLoad() {
  const value = localStorage.getItem('theme')
  // if (value === 'dark') {
  //   bodyEl.classList.add('dark');
  //   inputEl.checked = true;
  //   return
  // }
  // bodyEl.classList.add('light');

  switch (value) {
    case 'dark':
      bodyEl.classList.add('dark');
      inputEl.checked = true;
      break;
    
    default:
     bodyEl.classList.add('light'); 
  }


  
}
