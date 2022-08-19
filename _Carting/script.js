//calendar

function calendar(year, month) {
	month--;

	let rusMonth = [ 'январь', 'февраль', 'март', 'апрель',
	'май', 'июнь', 'июль', 'август', 'сентябрь',
	'октябрь', 'ноябрь', 'декабрь',];

	let days = new Date(year, month+1) - new Date(year, month)

	days/= 1000 * 60 * 60 * 24;

    let startDay = new Date(year, month);  
    let index = ( startDay.getDay() + 6 ) % 7; 

    let rows = Math.ceil((days + index) / 7);

    let table = '<table>';

    table += '<caption>';
    table += `${rusMonth[month]} ${year}`;
    table += '</caption>';

    for(let i = 0, k = 1-index; i<rows; i++ ) {
    table += '<tr>';  
    
        for(let j=0; j<7; j++) {
        
            table += '<td>';
            
            if( k>0 && k<=days )
                table += k;
            else
                table += '';
            
            table += '</td>';
            k++;
        }

    table += '</tr>';
    }

    table += '</table>';

    let calendarWrapper = document.getElementById('calendar');
    calendarWrapper.innerHTML = table;

    /*calendar -стили*/

    let tdAll=document.querySelectorAll('td');

    tdAll.forEach(elem => elem.classList.add('calendar-td-styles'))

    let tableCaption=document.querySelector('caption');
    tableCaption.classList.add('calendar-caption-styles')  //CSS-file str.251

    let currentDay = new Date().getDate();

    if(new Date().getMonth() == month) {
        tdAll[currentDay-1].classList.add('currentDay')
    }

    /*дни заездов*/

    for(let n=5; n<=34; n+=7) {
        if(tdAll[n].innerHTML != ''){
            tdAll[n].classList.add('driveDays')
        }
    }
}

let currentMonth = new Date().getMonth();
currentMonth++;

calendar(2022, currentMonth)

//owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dotsEach:true,
    responsiveBaseElement: 'body',  
    responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

//menu-hamburger

let menuLines = document.querySelectorAll('.menu-hamburger_line');
let menuHamburgerIcon = document.getElementById('menu-hamburger-icon');
let menuHamburger = document.querySelector('.menu-hamburger');

menuHamburgerIcon.onclick = function() {
    menuLines[0].classList.toggle('menu_line1');
    menuLines[1].classList.toggle('menu_line2');
    menuLines[2].classList.toggle('menu_line3');
    menuHamburger.classList.toggle('menu-hamburger-display');
}