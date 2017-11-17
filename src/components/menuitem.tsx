import * as React from 'react';

export class MenuItem extends React.Component<any, any> {

    menu: string;

    constructor(props : any){

        super(props);

        this.menu = props.menu;

    }

    render() {

        return <li><a>{this.menu}</a></li>;

    }


}