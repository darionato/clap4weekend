import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from './components/counter';
   
ReactDOM.render(<Counter updateTitle="y" />, document.getElementById('counter'));
