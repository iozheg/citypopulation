import * as React from "react";

export interface CityRowProps{
    city: {
        name: string,
        population: number
    }
}

export class CityRow extends React.Component<CityRowProps, {}>{
    render(){
        return(
            <tr>
                <td>{this.props.city.name}</td>
                <td>{this.props.city.population}</td>
            </tr>
        );
    }
}