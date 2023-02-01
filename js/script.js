'use strict';

const clock = document.querySelector('.clock');
const hoursArrow = document.querySelector('.clock__hours-arrow');
const minutsArrow = document.querySelector('.clock__minuts-arrow');
const secundsArrow = document.querySelector('.clock__secunds-arrow');

function clockTime() {
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let minutsNow = timeNow.getMinutes();
    let secundsNow = timeNow.getSeconds();
    
    // console.log(`${hoursNow} ${minutsNow} ${secundsNow}`);
    
    hoursArrow.style.transform = `rotate(${hoursNow * 30}deg)`;
    minutsArrow.style.transform = `rotate(${minutsNow * 6}deg)`;
    secundsArrow.style.transform = `rotate(${secundsNow * 6}deg)`;
}


//setTimeout(clearInterval, 1000 * 180, timeCycle);

document.addEventListener('DOMContentLoaded', (event) => {
    let timeCycle = setInterval(clockTime, 1000);
})
