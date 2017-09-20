import * as React from "react";
import * as ReactDOM from "react-dom";
import { Countdown } from './core/countdown';

let title = document.title;

let startTimer = function(){

    let cd = new Countdown();
    
    let c = cd.getCountdown()

    document.title = `${c} - ${title}`;

    const element = <h1 className="title">{c}</h1>;
    
    ReactDOM.render(element, document.getElementById('counter'));

}

setInterval(startTimer, 500);
