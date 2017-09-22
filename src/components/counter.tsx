import * as React from 'react';
import { Countdown } from './../core/countdown';



export class Counter extends React.Component<any, any> {

    timerId: number;
    updateTitle: boolean;
    title: string;

    constructor(props : any){

        super(props);

        let cd = new Countdown();

        this.state = { minutes: cd.getCountdown() };

        this.updateTitle = props.updateTitle === 'y';

        if (this.updateTitle) this.title = document.title;

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


    tick() {

        let cd = new Countdown();

        let c = cd.getCountdown();

        this.setState({
            minutes: c
        });

        if (this.updateTitle) document.title = `${c} - ${this.title}`;

    }


    render() {

        return <h1 className="title">{this.state.minutes}</h1>

    }

}