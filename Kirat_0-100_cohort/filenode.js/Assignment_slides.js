
//Q3
//Create a terminal clock (HH:MM:SS)
function getTime() {
    const date  = new Date();
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
}

function displayClock() {
    const clock = getTime();
    process.stdout.write('\033c');
    process.stdout.write(`${clock}\r`);
}
setInterval(displayClock,1000);