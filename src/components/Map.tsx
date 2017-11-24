import * as React from "react";
import { YaMaps } from "../utils/yamaps";


interface MapState{
    map: YaMaps;
}

export class MapComponent extends React.Component<{}, MapState>{

    constructor(props:any){
        super(props);

        this.state=null;
    }

    componentDidMount(){        
        this.setState({map: new YaMaps('map')});
        setTimeout(() => this.markCity(), 2000);
    }

    markCity(){
        this.state.map.setMark();
    }

    render(){
        return(
            <div id="map"></div>
        );
    }
}