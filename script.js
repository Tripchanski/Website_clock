function updateTime() {
    const clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    let timeElem = document.querySelector(".time");
    let iconElem = document.querySelector('.material-symbols-outlined')

    if (hours < 10) {hours = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    if (hours < 12 && hours > 6) {
        timeElem.innerHTML = 'Morning';
        iconElem.innerHTML = 'wb_twilight';}

    if (hours < 18 && hours > 12) {
        timeElem.innerHTML = 'Day';
        iconElem.innerHTML = 'sunny';}

    if (hours < 24 && hours > 18) {
        timeElem.innerHTML = 'Evening';
        iconElem.innerHTML = 'nights_stay';}

    if (hours < 6 && hours > 0) {
        timeElem.innerHTML = 'Night';
        iconElem.innerHTML = 'sleep';}

    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");

    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}
  
setInterval(updateTime, 250);
