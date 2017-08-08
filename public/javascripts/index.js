import countdown from './countdown';


var title = document.title;
var cd = new countdown();

var startTimer = function() {

    var c = cd.getCountdown()

    document.getElementById('counter').innerText = c;
    document.title = `${c} - ${title}`;

    setTimeout(startTimer, 500);

}

startTimer();
