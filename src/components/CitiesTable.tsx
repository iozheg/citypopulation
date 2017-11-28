import * as React from "react";

import { serverRequest } from "../utils/http-request-helper";
import { CityRow } from "./CityRow";

interface CitiesTableProps{
    cities: {
        id: number,
        name: string,
        population: number
    }[];
    /** Callback to notify when user selected city. */
    onCitySelected: Function;
}

/** Manages the table of cities. */
export class CitiesTable extends React.Component<CitiesTableProps, {}>{
    constructor(props: CitiesTableProps){
        super(props);
        
        this.state = null;
    }

    /** Send to parent selected city name. */
    handleRowClick(key: number): void{
        this.props.onCitySelected(this.getCityNameById(key));
    }

    getCityNameById(id: number): string{
        for(let i in this.props.cities){
            if(this.props.cities[i].id == id)
                return this.props.cities[i].name;
        }

        return '';
    }

    render(){
        return(
            <table className='table table-striped'>
                <thead><tr>
                    <th>Город</th><th>Население (тыс. чел.)</th>
                </tr></thead>
                <tbody>
                    {this.props.cities.map(
                            elem=><CityRow 
                                    key={elem.id}
                                    city={elem}
                                    onClick={(e:number) => this.handleRowClick(e)}
                                />
                        )
                    }
                </tbody>
            </table>
        );
    }
}