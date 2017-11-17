import * as React from 'react';
import { MenuItem } from './menuitem';

export class Footer extends React.Component<any, any> {

    menus: string[];

    constructor(props : any){

        super(props);

        this.menus = props.menus;

    }

    render() {

        return (
            <ul>
                {this.menus.map((m) =>
                    <MenuItem key={m} menu={m} />
                )}
            </ul>
        );

    }


}