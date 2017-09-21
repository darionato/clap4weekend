import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from './components/counter';

let title = document.title;

let startTimer = function(){
   
    //let c = cd.getCountdown()

    //document.title = `${c} - ${title}`;
    
    ReactDOM.render(<Counter />, document.getElementById('counter'));

}

setInterval(startTimer, 500);
