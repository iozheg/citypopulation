import * as React from "react";
import { CitiesTable } from "./CitiesTable";
import { MapComponent } from "./Map";

export class CityManager extends React.Component{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div>
                <CitiesTable />
                <MapComponent />
            </div>
            
        );
    }
}