const $button = document.querySelector('.hi');

var $modalButton = document.getElementById('btn-modal');
var $modal = document.querySelector('.modal-container');
var $closeButton = document.querySelector('.closeButton');
var $addButton = document.querySelector('.addButton');

let modalShow = false;

function showModal() {
  $modal.style.zIndex = '1';
  $modal.style.opacity = '1';
  $modal.classList.toggle('show-modal-animation');
  modalShow = true;
}

function hideModal() {
  $modal.style.zIndex = '-1';
  $modal.style.opacity = '0';
  $modal.classList.toggle('show-modal-animation');
  modalShow = false;
}

$modalButton.addEventListener('click', function () {
  if (!modalShow) {
    showModal();
  } else {
    hideModal();
  }
});

document.addEventListener('click', function (e) {
  if (modalShow && e.target.id === 'exampleModal') {
    hideModal();
  }
});

$closeButton.addEventListener('click', function () {
  const element = document.querySelector('#task-input');

  element.value = '';

  hideModal();
});

let tasks = [],
  inputMonth = [],
  inputDate = [],
  startTime = [],
  endTime = [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function saveMonth() {
  localStorage.setItem('inputMonth', JSON.stringify(inputMonth));
}

function saveDate() {
  localStorage.setItem('inputDate', JSON.stringify(inputDate));
}

function saveStartTime() {
  localStorage.setItem('startTime', JSON.stringify(startTime));
}

function saveEndTime() {
  localStorage.setItem('endTime', JSON.stringify(endTime));
}

$addButton.addEventListener('click', function () {
  const element = document.querySelector('#task-input');

  tasks.push(task);
  saveTasks();
  element.value = '';

  const mon = document.querySelector('#month-input');

  inputMonth.push(month);
  saveMonth();
  mon.value = '';

  const day1 = document.querySelector('#day-input');

  inputDate.push(date);
  saveDate();
  day1.value = '';

  const st = document.querySelector('#start-time-input');

  startTime.push(startTime1);
  saveStartTime();
  st.value = '';

  const et = document.querySelector('#end-time-input');

  endTime.push(endTime1);
  saveEndTime();
  et.value = '';

  hideModal();
});
