const clock = document.getElementById("clock");

function updateClock(){
    const date = new Date;
    let hours = date.getHours();
    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    let time = `${hours}:${minutes}:${seconds} ${meridian}`;
    clock.textContent = time;
}

setInterval(updateClock, 1000);

