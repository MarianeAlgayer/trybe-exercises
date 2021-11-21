function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

//Exercise 1
function createDaysOfTheMonth() {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDays.length; index += 1) {
        const day = dezDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.className = 'day';
        dayListItem.innerText = day;

        if (day === 4 || day === 11 || day === 18 || day === 25) {
            dayListItem.classList.add('friday');
        }

        if (day === 24 || day === 25 || day === 31) {
            dayListItem.classList.add('holiday');
        }

        dezDaysList.appendChild(dayListItem);
    }
}

createDaysOfTheMonth();

//Exercise 2
function createHolidayButton(buttonName) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerText = buttonName;
    buttonsContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');

//Exercise 3
function changeHolidaysColour() {
    const holidayButton = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');
    const backgroundColour = 'rgb(238,238,238)';
    const newColour = 'white';

    holidayButton.addEventListener('click', function () {
        for (let holiday of holidays) {
            if (holiday.style.backgroundColor === newColour) {
                holiday.style.backgroundColor = backgroundColour;
            } else {
                holiday.style.backgroundColor = newColour;
            }
        }
    });
}

changeHolidaysColour();

//Exercise 4
function createFridayButton(buttonName) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = buttonName;
    buttonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

//Exercise 5
function changeFridaysText(array) {
    const fridayButton = document.querySelector('#btn-friday');
    const fridays = document.querySelectorAll('.friday');
    const newText = 'SEXTOU!!!';

    fridayButton.addEventListener('click', function () {
        for(let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerText !== newText) {
                fridays[index].innerText = newText;
            } else {
                fridays[index].innerText = fridaysArr[index];
            }
        }
    })
}

let fridaysArr = [4, 11, 18, 25];
changeFridaysText(fridaysArr);

//Exercise 6
function zoomIn() {
    const days = document.querySelector('#days');
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '25px';
        event.target.style.fontWeight = '700';
    });
}

function zoomOut() {
    const days = document.querySelector('#days');
    days.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '400';
    })
}

zoomIn();
zoomOut();
