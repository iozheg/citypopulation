import * as React from "react";

import { serverRequest } from "../utils/http-request-helper";
import { CityRow } from "./CityRow";

/**
 * @param {Array<{}>} cities Array of objects that represents cities.
 * @param {string} selectedCity Name of selected by user city.
 * 
 * @export
 * @interface CitiesTableState
 */
export interface CitiesTableState{
    cities: [{
        id: number,
        name: string,
        population: number
    }];
    selectedCity: number;
}

/**
 * @param {Function} onCitySelected Callback to notify when user
 *      selected city.
 * @param {Function} onCitiesRecieved Callback to notify when list
 *      of cities received.
 * 
 * @interface CitiesTableProps
 */
interface CitiesTableProps{
    onCitySelected: Function;
    onCitiesRecieved: Function;
}

/**
 * Manages the table of cities.
 * 
 * @export
 * @class CitiesTable
 * @extends {React.Component<CitiesTableProps, CitiesTableState>}
 */
export class CitiesTable extends React.Component<CitiesTableProps, CitiesTableState>{
    constructor(props: CitiesTableProps){
        super(props);
        
        this.state = null;
    }

    /**
     * When React mounts this component we make request to server to
     * receive cities.
     * 
     * @memberof CitiesTable
     */
    componentDidMount(): void{
        serverRequest('cities', {})
            .then(obj => this.recievedCities(obj));
    }

    /**
     * When list of cities recieved send it to parent.
     * 
     * @param {*} obj JSON string from server.
     * @memberof CitiesTable
     */
    recievedCities(obj: any){
        this.setState({cities: JSON.parse(obj)});
        this.props.onCitiesRecieved(this.state.cities);
    }

    /**
     * Send to parent selected city name.
     * 
     * @param {number} key 
     * @memberof CitiesTable
     */
    handleRowClick(key: number): void{
        this.props.onCitySelected(this.getCityNameById(key));
    }

    getCityNameById(id: number): string{
        for(let i in this.state.cities){
            if(this.state.cities[i].id == id)
                return this.state.cities[i].name;
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
                    {this.state != null && 
                            this.state.cities.map(
                                elem=><CityRow 
                                        key={elem.id}
                                        city={elem}
                                        onClick={e => this.handleRowClick(e)}
                                    />
                            )
                    }
                </tbody>
            </table>
        );
    }
}