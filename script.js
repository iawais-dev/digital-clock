var ghante = document.getElementById("hour");
var din = document.getElementById("day");
var hmm = document.getElementById("minute");
var dinchng = document.getElementById("ampm");
var sec = document.getElementById("second");

window.addEventListener("load", calculatetime
);

function calculatetime(){
    var date = new Date();
    var daynumber = date.getDay();
    var hour = date.getHours();
    var Minutes = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hour >= 12 ? "PM" : "AM";
    var daynames = ["SUN","MON","TUE","WED","THU", "FRI","SAT"];

    hour = hour % 12;
    hour = hour ? hour : "12";
    if(hour<10){
    "0"+hour;
    }
    else{
        hour;
    }
    if(Minutes<10 ){
  "0"+hour;
    }
    else{
        hour;
    }
    
  

    
    ghante.innerHTML = hour;
    din.innerHTML = daynames[daynumber];
    hmm.innerHTML = Minutes;
    dinchng.innerHTML = ampm;
    sec.innerHTML = second+1;



   setTimeout( calculatetime, 1000);
}