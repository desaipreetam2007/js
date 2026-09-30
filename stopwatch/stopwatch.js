const display=document.getElementById("timer");
let timer=null;
let isrunning=false;
let starttimer=0;
let elapsedtime=0;
function start(){
    if(!isrunning){
        starttimer= Date.now()-elapsedtime;
        timer=setInterval(updateclock,10);
        isrunning=true;
    }
}
function stop(){
        if(isrunning){
            clearInterval(timer);
            elapsedtime=Date.now()-starttimer;
            isrunning=false;
        }
}
function reset(){
    clearInterval(timer);
    isrunning=false;
    starttimer=0;
    elapsedtime=0;
    display.textContent=`00:00:00:00`;

}
function updateclock(){
    const currenttime= Date.now();
    elapsedtime=currenttime-starttimer;

    let hours=Math.floor(elapsedtime / (1000*60*60));
    let minutes=Math.floor(elapsedtime/(1000*60) %60);
    let seconds =Math.floor(elapsedtime/1000 % 60);
    let milliseconds=Math.floor(elapsedtime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}