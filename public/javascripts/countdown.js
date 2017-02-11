define(function() {


    class Countdown {

        constructor () {}

        getCountdown () {
            
            var friday = moment().day(5).hour(17).minute(30).second(0);
            var missing = friday.diff(moment(), 'minutes');

            if (missing < 0) friday = friday.add(1, 'week');

            missing = friday.diff(moment(), 'minutes');

            return missing;

        }

    }

    return new Countdown();

});


if (!(typeof(module) === 'undefined'))

    module.exports.Countdown = Countdown