import * as React from "react";
import { YaMaps } from "../utils/yamaps";


interface MapState{
    map: YaMaps;
    selectedCity: string;
}

interface MapProps{
    selectedCity: string;
}

export class MapComponent extends React.Component<MapProps, MapState>{

    constructor(props: MapProps){
        super(props);

        this.state={
            map: null,
            selectedCity: null
        };
    }

    componentDidMount(): void{        
        this.setState({map: new YaMaps('map')});
    }

    componentWillReceiveProps(nextProps: MapProps): void{
        if(nextProps.selectedCity != this.props.selectedCity){
            this.setState({selectedCity: nextProps.selectedCity});
            this.state.map.setMark(nextProps.selectedCity);
        }
    }

    render(){
        return(
            <div id="map"></div>
        );
    }
}