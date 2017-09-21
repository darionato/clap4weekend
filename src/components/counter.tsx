import * as React from 'react';
import { Countdown } from './../core/countdown';



export class Counter extends React.Component<any, any> {

    timerId: number;

    constructor(props : any){

        super(props);

        let cd = new Countdown();

        this.state = { minutes: cd.getCountdown() }

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

        this.setState({
            minutes: cd.getCountdown()
        });

    }


    render() {

        return <h1 className="title">{this.state.minutes}</h1>

    }

}