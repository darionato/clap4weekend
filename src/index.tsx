import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from './components/counter';
import { Footer } from './components/footer';
   
ReactDOM.render(<Counter updateTitle="y" />, document.getElementById('counter'));

let menus : string[] = ['Countdown', 'About', 'Contacts', 'Clap']

ReactDOM.render(<Footer menus={menus} />, document.getElementById('footer'));
