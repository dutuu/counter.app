
// THE TEXT (RESULT)
let countEl = document.getElementById('count-el')
count = 0

// Increment by button
function increment() {
    count += 1;
    countEl.innerText = count
}

// Decrement by button
function decrement() {
    count -= 1;
    countEl.innerText = count
}



// Previous enteries
let logsEl = document.getElementById('logs-el')

function save() {
    logsEl.innerText += ' ' + count + ' -';
    countEl.innerText = 0;
    count = 0;
}

