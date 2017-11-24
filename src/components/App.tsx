import * as React from "react";

import { Login } from "./Login";
import { CityManager } from "./CityManager";

export interface AppState{
    isLogged: boolean
}

export class App extends React.Component<{}, AppState>{
    constructor(props:any){
        super(props);

        this.state = {isLogged: false};
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    }

    handleLoginSuccess(){
        this.setState({isLogged: true});
    }

    render(){
        return(
            <div className="container">
                {this.state.isLogged
                    ? <CityManager />
                    : <Login onLogin={this.handleLoginSuccess} />
                }
            </div>
        );
    }
}