import * as React from 'react';
import * as Push from 'push.js';
import { Countdown } from './../core/countdown';
import { Seconds } from './seconds';


export class Counter extends React.Component<any, any> {

    timerId: number;
    updateTitle: boolean;
    title: string;
    notified: boolean;

    constructor(props : any){

        super(props);

        let cd = new Countdown();

        let c = cd.getCountdown();

        this.state = { minutes: c.minutes, seconds: c.seconds };

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

        Push.create(`${c.minutes} minutes missing!`);

    }



    tick() {

        let cd = new Countdown();

        let c = cd.getCountdown();

        this.setState({
            minutes: c.minutes,
            seconds: c.seconds
        });

        if (this.updateTitle) {
            let time = `${c.minutes}`;
            if (c.minutes === 0) time += `:${c.seconds}`;
            document.title = `${time} - ${this.title}`;
        }

        if (!this.notified && c.minutes < 6)
        {
            this.notified = true;
            Push.create(`Keep attention! ${c.minutes} minutes missing!`);
        }


    }


    render() {

        return <h1 onClick={this.handleClick} className="title">
            {this.state.minutes}
            <Seconds minutes={this.state.minutes} seconds={this.state.seconds}></Seconds>
            </h1>

    }

}