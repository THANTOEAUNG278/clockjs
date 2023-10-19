const hour =document.getElementById('hour');
const minute =document.getElementById('minute');
const seconds =document.getElementById('seconds');

setInterval(  () => {
  const dateNow = new Date();

  const hr = dateNow.getHours();
  const min = dateNow.getMinutes();
  const sec = dateNow.getSeconds();

  console.log("time",hr,min,sec)
  
  const timeHour = (hr * 30) + (min / 2);
  const timeMinute = (min * 6) + (sec /10);
  const timeSeconds = sec * 6

  console.log('deg',timeHour,timeMinute,timeSeconds)

  hour.style.transform = `rotate(${timeHour}deg)`;
  minute.style.transform = `rotate(${timeMinute}deg)`;
  seconds.style.transform = `rotate(${timeSeconds}deg)`;},1000)

