import * as React from "react";

import { serverRequest } from "../utils/http-request-helper";
import { CityRow } from "./CityRow";

export interface CitiesTableState{
    cities: [{
        id: number,
        name: string,
        population: number
    }];
    temp: [{}];
}

export class CitiesTable extends React.Component<{}, CitiesTableState>{
    constructor(props:any){
        super(props);
        
        this.state = null;
    }

    componentDidMount(){
        serverRequest('cities', {})
            .then(obj => this.setState({cities: JSON.parse(obj)}));
    }

    render(){
        return(
            <table className='table table-striped'>
                <thead><tr><th>Город</th><th>Население</th></tr></thead>
                <tbody>
                    {this.state != null && 
                            this.state.cities.map(elem=><CityRow key={elem.id} city={elem} />)
                    }
                </tbody>
            </table>
        );
    }
}