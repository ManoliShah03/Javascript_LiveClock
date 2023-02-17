function display_time()
{
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var AM = document.getElementById('AM');

    if(hr >=12){
        AM.innerHTML = 'PM';
    }
    else{
        AM.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    
}

setInterval(display_time, 1000);



