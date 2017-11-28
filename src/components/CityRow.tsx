import * as React from "react";

/**
 * @param {{}} city 
 * @param {Function} onClick 
 * 
 * @export
 * @interface CityRowProps
 */
export interface CityRowProps{
    /** City for current row. */
    city: {
        id: number,
        name: string,
        population: number
    };
    /** Callback to send parent id of selected city. */
    onClick: Function;
}

/** Renders table row. */
export class CityRow extends React.Component<CityRowProps, {}>{
    
    id: number;

    constructor(props: CityRowProps){
        super(props);

        this.id = this.props.city.id;
    }

    onClick(): void{
        this.props.onClick(this.id);
    }

    render(){
        return(
            <tr className="clickable" onClick={e => this.onClick()}>
                <td>{this.props.city.name}</td>
                <td>{this.props.city.population}</td>
            </tr>
        );
    }
}