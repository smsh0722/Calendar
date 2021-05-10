console.log('zzzz');

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
    console.log('clicked!', window.inputValue);
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
var inputTask, inputMonth, inputDate, startTime, endTime;

$addButton.addEventListener('click', function () {
  const element = document.querySelector('#task-input');

  inputTask = element.value;
  element.value = '';

  const mon = document.querySelector('#month-input');

  inputMonth = mon.value;
  mon.value = '';

  const day1 = document.querySelector('#day-input');

  inputDate = day1.value;
  day1.value = '';

  const st = document.querySelector('#start-time-input');

  startTime = st.value;
  st.value = '';

  const et = document.querySelector('#end-time-input');

  endTime = et.value;
  et.value = '';

  hideModal();
});
