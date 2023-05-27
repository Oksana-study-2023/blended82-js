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

{/* <form id="login-form">
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button name="button" type="submit">Login</button>
    </form> */}

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const formEl = document.querySelector('#login-form');
const { email, password, button } = formEl.elements;
const formData = {};
const savedData = JSON.parse(localStorage.getItem('form-data'));
onReload();


formEl.addEventListener('submit', onFormSubmit);

function logout() {
    localStorage.removeItem('form-data');
        button.textContent = "login";
        email.removeAttribute('disabled');
        password.removeAttribute('disabled');
}

function onLogin() {
    button.textContent = 'logout';
    email.disabled = true;
    password.disabled = true;
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (button.textContent === 'logout') {
        logout();
        return;
    };

    if (email.value === USER_DATA.email && password.value === USER_DATA.password) {
        formData.email = email.value;
        formData.password = password.value;
        localStorage.setItem('form-data', JSON.stringify(formData));
        onLogin();
        formEl.reset();
    }

}

function onReload() {
    if (savedData) {
        onLogin();
    }
}