var [seconds,minutes,houres] = [0,0,0];
var displayTime = document.querySelector("#display-time");
let timer = null;


function stopWatch (){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            houres++;
        }
    }
    //time formating
    let h = houres < 10 ? "0" + houres : houres;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}
//function for watch play
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}
//function for watch reset
function watchReset(){
        clearInterval(timer);
        [seconds,minutes,houres] = [0,0,0];
        displayTime.innerHTML = "00:00:00";
}
//function for watch stop
function watchStop(){
        clearInterval(timer);
}
