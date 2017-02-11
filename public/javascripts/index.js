require(['countdown'], function(countdown) {

    var title = document.title;

    startTimer = function() {

        var c = countdown.getCountdown()

        document.getElementById('counter').innerText = c;
        document.title = `${c} - ${title}`;

        setTimeout(startTimer, 500);

    }

    startTimer();

});