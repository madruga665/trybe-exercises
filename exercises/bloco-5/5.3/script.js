function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 01
function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let dayListItem = document.createElement('li');
    dayListItem.className = 'day';
    dayListItem.innerHTML = days;
    monthDaysList.appendChild(dayListItem);

    if (days === 24 | days === 31) {
      dayListItem.className = 'day holiday';
    } else if (days === 4 | days === 11 | days === 18) {
      dayListItem.className = 'day friday';
    } else if (days === 25) {
      dayListItem.className = 'day holiday friday';
    }
  }
};

createDaysOfMonth();

// Exercício 02

function createBtnHolidays(buttonName) {
  let buttonsContainer = document.querySelector(".buttons-container");
  let btnHoliday = document.createElement("button");
  btnHoliday.id = "btn-holiday";
  btnHoliday.innerHTML = buttonName;
  buttonsContainer.appendChild(btnHoliday);
}

createBtnHolidays("Feriados");

// Exercício 03
function showHolidays() {
  let holidays = document.querySelectorAll(".holiday");
  let initialColor = "rgb(238, 238, 238)";

  for (let index = 0; index < holidays.length; index += 1) {
    let color = holidays[index].style.backgroundColor;
    if (color === "black") {
      holidays[index].style.backgroundColor = initialColor;
    } else {
      holidays[index].style.backgroundColor = "black";
    }
  }
}
let btnHoliday = document.querySelector("#btn-holiday");
btnHoliday.addEventListener("click", showHolidays);


// Exercício 04
function createBtnFriday(buttonName) {
  let buttonsContainer = document.querySelector(".buttons-container");
  let btnFriday = document.createElement("button");
  btnFriday.id = "btn-friday";
  btnFriday.innerHTML = buttonName;
  buttonsContainer.appendChild(btnFriday);
}

createBtnFriday("Sexta-Feira");

// Exercício 05
function ShowSextou() {
  let dezFridays = [4, 11, 18, 25];
  let friday = document.querySelectorAll('.friday');
  
  for (let index = 0; index < friday.length; index += 1) {
    let sextou = friday[index].innerHTML;
    if (sextou !== 'SEXTOU!') {
      friday[index].innerHTML = 'SEXTOU!';
    } else {
      friday[index].innerHTML = dezFridays[index]
    }
  }
}

let btnFriday = document.querySelector('#btn-friday');
btnFriday.addEventListener('click', ShowSextou);

// Exercício 06
function zoomDaysIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
};

function zoomDaysOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

zoomDaysIn();
zoomDaysOut();
