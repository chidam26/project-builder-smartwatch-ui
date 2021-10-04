// setting delay time 
var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var setTime = setInterval(showtime,1000);

// creating function which shows the time  showtime();
function showtime(){
    //creating a variable which stores today date //
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay(); 

if(hours<10){
        hours=`0${hours}`;
    }
    if(minutes<10){
      minutes=`0${minutes}`;
      }

      toptime.innerHTML= hours+":"+ minutes;
      middletime.innerHTML= hours+":"+minutes;
      daydisplay.innerHTML= days[day];
      }
      setInterval(time,1000);
    
//created a aray variable Days which store all days 
//array of days

// appending into  html body by using their id 
// document.getElementById('day').innerHTML = weekDays[today.getDay()] // showing todays day on page