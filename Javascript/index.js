function updateclock(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const changtime =`${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent=changtime

}
updateclock();
setInterval(updateclock, 1000);