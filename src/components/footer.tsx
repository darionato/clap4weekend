import * as React from 'react';
import { MenuItem } from './menuitem';
import { IMenuItem } from "../interfaces/IMenuItem";

export class Footer extends React.Component<any, any> {

    menus: IMenuItem[];

    constructor(props : any){

        super(props);

        this.menus = props.menus;

    }

    render() {

        return (
            <ul>
                {this.menus.map((m) =>
                    <MenuItem key={m.key} menu={m} />
                )}
            </ul>
        );

    }


}