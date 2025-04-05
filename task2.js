// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const getUserButton = document.querySelector('#getUserButton');
const userNameInput = document.querySelector('#userNameInput');
const userCity = document.querySelector('#userCity');

getUserButton.addEventListener('click', () => {
  const userName = userNameInput.value;

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      for (user of data) {
        if (user.name === userName) {
          userCity.textContent = user.address.city;
        }
      }
    });
});