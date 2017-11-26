import * as React from "react";

import { serverRequest } from "../utils/http-request-helper";
import { CityRow } from "./CityRow";

export interface CitiesTableState{
    cities: [{
        id: number,
        name: string,
        population: number
    }];
    selectedCity: number;
}

interface CitiesTableProps{
    onCitySelected: Function;
    onCitiesRecieved: Function;
}

export class CitiesTable extends React.Component<CitiesTableProps, CitiesTableState>{
    constructor(props: CitiesTableProps){
        super(props);
        
        this.state = null;
    }

    componentDidMount(): void{
        serverRequest('cities', {})
            .then(obj => this.recievedCities(obj));
    }

    recievedCities(obj: any){
        this.setState({cities: JSON.parse(obj)});
        this.props.onCitiesRecieved(this.state.cities);
    }

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
                <thead><tr><th>Город</th><th>Население (тыс. чел.)</th></tr></thead>
                <tbody>
                    {this.state != null && 
                            this.state.cities.map(
                                elem=><CityRow key={elem.id} city={elem} onClick={e => this.handleRowClick(e)}/>
                            )
                    }
                </tbody>
            </table>
        );
    }
}