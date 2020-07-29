//First JavaScript code!
const oneDay = 24*60*60*1000;
const YEAR = new Date().getFullYear();
const CHRISTMAS = new Date(YEAR, 11, 25);
const BAR_LENGTH = 50;

let currentDate;
let message;
let until;
let untilMessage;
let progress;
let progressLeft;
let progressDone;
let percent;

//DOM ELEMENTS
let w_message = document.querySelector('.christmas-message');
let w_days = document.querySelector('.days-left');
let w_percent = document.querySelector('.progress')

function daysUntil() {
    currentDate = new Date();
    until = Math.round((CHRISTMAS - currentDate) / oneDay);
    return;
}

function progressBar(until) {
    percent = (((365 - until) / 365) * 100).toFixed(1);
    return;
}

function getMessage(until) {
    if (until === 0) {
        message = 'Christmas Loaded!'
        untilMessage = 'MERRY CHRISTMAS!' 
    } else {
        message = 'Christmas Loading...'
        untilMessage = until + ' Days Left!'
    }
    return;
}

function main() {
    daysUntil();
    progressBar(until);
    getMessage(until);
    return;
}
main();

//SET DOM ELEMENTS
w_message.textContent = message;
w_days.textContent = untilMessage
w_percent.style.width = percent + '%';
w_percent.textContent = percent + '%'
w_percent.style.opacity = '1';

