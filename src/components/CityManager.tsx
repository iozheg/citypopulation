import * as React from "react";
import { CitiesTable } from "./CitiesTable";

export class CityManager extends React.Component{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <CitiesTable />
        );
    }
}