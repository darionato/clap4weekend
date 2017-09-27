import * as React from 'react';
import * as Push from 'push.js';
import { Countdown } from './../core/countdown';


export class Counter extends React.Component<any, any> {

    timerId: number;
    updateTitle: boolean;
    title: string;
    notified: boolean;

    constructor(props : any){

        super(props);

        let cd = new Countdown();

        this.state = { minutes: cd.getCountdown() };

        this.updateTitle = props.updateTitle === 'y';

        if (this.updateTitle) this.title = document.title;

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {

        this.timerId = setInterval(
            () => this.tick(),
            500
        );

    }

    componentWillUnmount(){

        clearInterval(this.timerId);

    }



    handleClick() {

        let cd = new Countdown();
        
        let c = cd.getCountdown();

        Push.create(`${c} minutes missing!`);

    }



    tick() {

        let cd = new Countdown();

        let c = cd.getCountdown();

        this.setState({
            minutes: c
        });

        if (this.updateTitle) document.title = `${c} - ${this.title}`;

        if (!this.notified && c < 6)
        {
            this.notified = true;
            Push.create('Keep attention! Few minutes missing!');
        }


    }


    render() {

        return <h1 onClick={this.handleClick} className="title">{this.state.minutes}</h1>

    }

}