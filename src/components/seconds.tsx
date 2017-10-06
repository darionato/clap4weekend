import * as React from 'react';

export class Seconds extends React.Component<any, any> {

    constructor(props : any){

        super(props);

    }

    render(){

        if (this.props.minutes > 0) return null;

        return <span>:{this.props.seconds}</span>

    }

}