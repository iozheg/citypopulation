import * as React from "react";

import { serverRequest } from "../utils/http-request-helper";
import { CityRow } from "./CityRow";

export interface CitiesTableState{
    cities: [{
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
        this.state != null && console.log(this.state.cities);
        return(
            <table className='table table-striped'>
                <thead><tr><th>Город</th><th>Население</th></tr></thead>
                <tbody>
                    {this.state != null && 
                            this.state.cities.map(elem=><CityRow city={elem} />)
                    }
                </tbody>
            </table>
        );
    }
}