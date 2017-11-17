import * as React from 'react';
import { IMenuItem } from '../interfaces/IMenuItem';

export class MenuItem extends React.Component<any, any> {

    menu: IMenuItem;

    constructor(props : any){

        super(props);

        this.menu = props.menu;

    }

    render() {

        const active = this.menu.selected ? 'is-active' : '';

        return <li className={active}>
                    <a>{this.menu.text}</a>
                </li>;

    }


}