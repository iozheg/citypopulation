import * as React from "react";
import { CitiesTable } from "./CitiesTable";
import { MapComponent } from "./Map";

interface CityManagerState{
    selectedCity: string;
}

export class CityManager extends React.Component<{}, CityManagerState>{
    constructor(props:any){
        super(props);
        
        this.state = {
            selectedCity: null
        }
    }

    onCitySelected(cityName: string): void{
        this.setState({selectedCity: cityName});
    }
    render(){
        return(
            <div>
                <CitiesTable 
                    onCitySelected={(cityName: string) => this.onCitySelected(cityName)}
                />
                <MapComponent selectedCity={this.state.selectedCity}/>
            </div>
            
        );
    }
}