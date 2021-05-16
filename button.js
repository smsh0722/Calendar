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

let todos = [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

$addButton.addEventListener('click', function () {
  const element = document.querySelector('#task-input');

  let inputTask = element.value;

  let todo = {
    task: inputTask,
    month: inputMonth,
    date: inputDate,
    ST: startTime,
    ET: endTime,
  };

  todos.push(todo);
  saveTodos();

  element.value = '';

  const mon = document.querySelector('#month-input');
  mon.value = '';

  const day1 = document.querySelector('#day-input');
  day1.value = '';

  const st = document.querySelector('#start-time-input');
  st.value = '';

  const et = document.querySelector('#end-time-input');
  et.value = '';

  hideModal();
});
