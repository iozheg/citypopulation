import * as React from "react";
import { CitiesTable } from "./CitiesTable";
import { MapComponent } from "./Map";
import { Chart } from "./Chart";
import { serverRequest } from "../utils/http-request-helper";

interface CityManagerState{
    cities: [{
        id: number,
        name: string,
        population: number
    }];
    selectedCity: string;
    showChart: boolean;
    chartButtonTitle: string;
}

export class CityManager extends React.Component<{}, CityManagerState>{
    constructor(props:any){
        super(props);
        
        this.state = {
            cities: null,
            selectedCity: null,
            showChart: false,
            chartButtonTitle: 'Chart'
        }
    }

    onCitySelected(cityName: string): void{
        this.setState({selectedCity: cityName});
    }

    citiesRecieved(cities: any){
        this.setState({cities: cities});
    }

    drawChart(): void{
        this.setState({
            showChart: !this.state.showChart,
            chartButtonTitle: this.state.showChart ? 'Chart' : 'Hide'
        });
    }

    render(){
        return(
            <div>                
                <div className="row">
                    <div className="col-md-6">
                        <CitiesTable 
                            onCitySelected={
                                (cityName: string) => this.onCitySelected(cityName)
                            }
                            onCitiesRecieved={
                                (cities: any) => this.citiesRecieved(cities)
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        
                        {!this.state.showChart 
                            && <MapComponent selectedCity={this.state.selectedCity} />}
                        {this.state.showChart 
                            && <Chart cities={this.state.cities} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn" onClick={e => this.drawChart()}>
                            {this.state.chartButtonTitle}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}