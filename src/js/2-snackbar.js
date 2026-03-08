// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(value, delay) {
  const promise = new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolved(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const borys = new FormData(form);
  const delay = borys.get('delay');
  const value = borys.get('state');

  const newPromise = createPromise(value, delay);
  newPromise
    .then(res => {
      iziToast.show({
        message: res,
      });
    })
    .catch(error => {
      iziToast.show({
        message: error,
      });
    });

  // очищувати поля треба
});
