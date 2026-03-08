// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const dataTimeButton = document.querySelector('.datatime-button');
// const timer = document.querySelector('.timer');
const input = document.querySelector('.datatime-input');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let userSelectedDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() <= Date.now()) {
      dataTimeButton.setAttribute('disabled', '');
      iziToast.show({
        title: 'ERROR',
        message: 'Please choose a date in the future',
      });
    } else {
      dataTimeButton.removeAttribute('disabled');
    }
  },
});

let intervalId;
let initTime;
let objectTime;

dataTimeButton.addEventListener('click', () => {
  input.setAttribute('disabled', '');
  dataTimeButton.setAttribute('disabled', '');

  intervalId = setInterval(() => {
    console.log('tick');
    initTime = Date.now();

    const diff = userSelectedDate.getTime() - initTime;
    objectTime = convertMs(diff);
    dataDays.textContent = addLeadingZero(objectTime.days);
    dataHours.textContent = addLeadingZero(objectTime.hours);
    dataMinutes.textContent = addLeadingZero(objectTime.minutes);
    dataSeconds.textContent = addLeadingZero(objectTime.seconds);

    // timer.innerHTML = itemTemplate(objectTime);

    if (diff < 1) {
      clearInterval(intervalId);
      input.removeAttribute('disabled');
    }
  }, 1000);
});

function addLeadingZero(value) {
  const validValue = String(value);
  return validValue.padStart(2, '0');
}

// function itemTemplate(item) {
//   const validDays = addLeadingZero(item.days);
//   const validHours = addLeadingZero(item.hours);
//   const validMinutes = addLeadingZero(item.minutes);
//   const validSeconds = addLeadingZero(item.seconds);

// return `<div class="field">
//             <span class="value" data-days>${validDays}</span>
//             <span class="label">Days</span>
//           </div>
//           <div class="field">
//             <span class="value" data-hours>${validHours}</span>
//             <span class="label">Hours</span>
//           </div>
//           <div class="field">
//             <span class="value" data-minutes>${validMinutes}</span>
//             <span class="label">Minutes</span>
//           </div>
//           <div class="field">
//             <span class="value" data-seconds>${validSeconds}</span>
//             <span class="label">Seconds</span>
//           </div>`;
// }
