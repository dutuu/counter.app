// Simple counter by button :)

let countEl = document.getElementById('count-el')
count = 0

function increment() {
    count += 1;
    countEl.innerText = count
}

// Previous enteries
let logsEl = document.getElementById('logs-el')

function save() {
    logsEl.innerText += ' ' + count + ' -';
    countEl.innerText = 0;
    count = 0;
}

// Welcome text

let welcomeEl = document.getElementById('welcome-el')

let name = 'boss'
let greet = 'Welcome back, '

welcomeEl.innerText = greet + name





