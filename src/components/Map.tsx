import * as React from "react";
import { YaMaps } from "../utils/yamaps";

interface MapState{
    /** Object that holds Yandex.maps object. */
    map: YaMaps;
}

interface MapProps{
    /** Name of selected city. */
    selectedCity: string;
}

/** Manages map displaying. */
export class MapComponent extends React.Component<MapProps, MapState>{

    constructor(props: MapProps){
        super(props);

        this.state={
            map: null
        };
    }

    /** Create map when React mounted component. */
    componentDidMount(): void{        
        this.setState({map: new YaMaps('map')});
    }

    /**
     * When component gets new selected city we set mark on it.
     * 
     * @param nextProps Contains name of selected city.
     *      Compare it with previously selected city.
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