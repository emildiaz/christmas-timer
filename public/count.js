const counter = document.querySelector(".counter");

updateCounter();

function updateCounter() {
    fetch('https://api.countapi.xyz/update/mychristmastimer.com/13f1f422-639f-4d48-a7db-b1465e17511d/?amount=1')
        .then(res => res.json())
        .then(res => {
            counter.innerHTML = res.value;
        });
}