import * as React from "react";
import { CitiesTable } from "./CitiesTable";
import { MapComponent } from "./Map";
import { Chart } from "./Chart";
import { serverRequest } from "../utils/http-request-helper";

/**
 * @param {Array<{}>} cities Array of objects that represents cities.
 * @param {string} selectedCity Name of selected by user city.
 * @param {boolean} showChart At once only map or chart can be shown.
 * @param {string} chartButtonTitle Button changes it's title in
 *      depending on is chart shown or not.
 * 
 * @interface CityManagerState
 */
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

interface CityManagerProps{
    requestHandler: Function;
}

/**
 * Manages displaying table of cities, map and chart.
 * 
 * @export
 * @class CityManager
 * @extends {React.Component<{}, CityManagerState>}
 */
export class CityManager extends React.Component<CityManagerProps, CityManagerState>{
    constructor(props:any){
        super(props);
        
        this.state = {
            cities: null,
            selectedCity: null,
            showChart: false,
            chartButtonTitle: 'Chart'
        }
    }

    /**
     * When React mounts this component we make request to server to
     * receive cities.
     * 
     * @memberof CityManager
     */
    componentDidMount(): void{
        this.props.requestHandler('cities', {})
            .then((obj:any) => this.setState({cities: JSON.parse(obj)}));
    }

    /**
     * This component receives name of selected city from it's child.
     * 
     * @param {string} cityName 
     * @memberof CityManager
     */
    onCitySelected(cityName: string): void{
        this.setState({selectedCity: cityName});
    }

    /**
     * Chart button handler.
     * 
     * @memberof CityManager
     */
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
                        {this.state.cities != null &&
                            <CitiesTable 
                                cities={this.state.cities}
                                onCitySelected={
                                    (cityName: string) => this.onCitySelected(cityName)
                                }
                            />
                        }
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