import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from './components/counter';
import { Footer } from './components/footer';
import { IMenuItem } from "./interfaces/IMenuItem";
   
ReactDOM.render(<Counter updateTitle="y" />, document.getElementById('counter'));

let menus : IMenuItem[] = [
    { key: 'countdown', text: 'Countdown', selected: true },
    { key: 'about', text: 'About', selected: false },
    { key: 'contacts', text: 'Contacts', selected: false },
    { key: 'clap', text: 'Clap', selected: false }
    ]

ReactDOM.render(<Footer menus={menus} />, document.getElementById('footer'));
