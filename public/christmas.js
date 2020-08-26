//First JavaScript code!
const oneDay = 24*60*60*1000;
const seconds = 1000;
const minutes = 1000 * 60;
const hours = 1000 * 60 * 60;
const YEAR = new Date().getFullYear();
const CHRISTMAS = new Date(YEAR, 11, 25);
const BAR_LENGTH = 50;
const units = [oneDay, hours, minutes, seconds];

let currentDate;
let message;
let until = [];
let untilMessage;
let progress;
let progressLeft;
let progressDone;
let percent;
let i = 0;

//DOM ELEMENTS
let w_message = document.querySelector('.christmas-message');
let w_days = document.querySelector('.days-left');
let w_percent = document.querySelector('.progress')

function daysUntil() {
    until = [];
    currentDate = new Date();
    units.forEach((unit) => {
        until.push(Math.ceil(((CHRISTMAS - currentDate) / unit)));
    });
    return;
}

function progressBar(until) {
    percent = (((365 - until) / 365) * 100).toFixed(1);
    return;
}

function getMessage(until) {
    message = 'Christmas Loading...'
    if (until === 0) {
        message = 'Christmas Loaded!'
        untilMessage = 'MERRY CHRISTMAS!' 
    }
    switch(i) {
        case 0:
            untilMessage = until + ' Days Left!'
            break;
        case 1:
            untilMessage = until + ' Hours Left!'
            break;
        case 2:
            untilMessage = until + ' Minutes Left!'
            break;
        case 3:
            untilMessage = until + ' Seconds Left!'
            break;
    }
    return;
}

function toggleUnit() {
    i = (i+1)%4;
    daysUntil();
    getMessage(until[i]);
    setDoms();
}

//SET DOM ELEMENTS
function setDoms() {
    w_message.textContent = message;
    w_days.textContent = untilMessage
    w_percent.style.width = percent + '%';
    w_percent.textContent = percent + '%'
    w_percent.style.opacity = '1';
}

function main() {
    daysUntil();
    progressBar(until[i]);
    getMessage(until[i]);
    setDoms();
}
main();

//Update the progress every second
setInterval(function(){
    daysUntil();
    getMessage(until[i]);
    setDoms();
}, 1000);




