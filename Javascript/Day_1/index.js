function current_time(){
    let time=new Date();
    let dayName=time.getDate();
    let month=time.getMonth();
    let year=time.getFullYear();
    let date=time.getDate();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    var am_pm="AM"
    if(hour==12){
        am_pm="PM"
    }
    if(hour>12){
        hour -= 12;
        am_pm="PM"
        const Evening=document.getElementById("intro")
        Evening.innerHTML="Good Evening!"
     //   console.log(Evening)
    }
    if(hour==0){
        hour = 12;
        am_pm="AM"
    }
    hour=hour<10 ? "0" +hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    let currtime=hour+":"+min+":"+sec+" "+am_pm;
    // console.log(currtime)
    var months=["Jan","Feb","March","April","May","June","July","Aug","Sept","oct","Nov","Dec"];
    var presentday=months[month]+" "+date+" "+year;
    //console.log(presentday)

    const clock=document.getElementById("time")
    clock.innerHTML=currtime

    const day=document.getElementById("dayintro");
    day.innerHTML=presentday
}
current_time();