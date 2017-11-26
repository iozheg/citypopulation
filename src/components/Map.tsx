import * as React from "react";
import { YaMaps } from "../utils/yamaps";

/**
 * @param {YaMaps} map Object that holds Yandex.maps object.
 * 
 * @interface MapState
 */
interface MapState{
    map: YaMaps;
}

/**
 * @param {string} selectedCity Name of selected city.
 * 
 * @interface MapProps
 */
interface MapProps{
    selectedCity: string;
}

/**
 * Manages map displaying.
 * 
 * @export
 * @class MapComponent
 * @extends {React.Component<MapProps, MapState>}
 */
export class MapComponent extends React.Component<MapProps, MapState>{

    constructor(props: MapProps){
        super(props);

        this.state={
            map: null
        };
    }

    /**
     * Create map when React mounted component.
     * 
     * @memberof MapComponent
     */
    componentDidMount(): void{        
        this.setState({map: new YaMaps('map')});
    }

    /**
     * When component gets new selected city we set mark on it.
     * 
     * @param {MapProps} nextProps Contains name of selected city.
     *      Compare it with previously selected city.
     * @memberof MapComponent
     */
    componentWillReceiveProps(nextProps: MapProps): void{
        if(nextProps.selectedCity != this.props.selectedCity){
            this.state.map.setMark(nextProps.selectedCity);
        }
    }

    render(){
        return(
            <div id="map"></div>
        );
    }
}