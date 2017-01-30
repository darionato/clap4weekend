class Countdown {

    constructor () {}

    getCountdown () {
        
        let moment = require('moment');
        var friday = moment().day(5).hour(17).minute(30);
        var missing = friday.diff(moment(), 'minutes');

        if (missing < 0) friday = friday.add(1, 'week');

        missing = friday.diff(moment(), 'minutes');

        return missing;

    }

}

module.exports.Countdown = Countdown