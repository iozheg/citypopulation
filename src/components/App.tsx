import * as React from "react";

import { Login } from "./Login";
import { CityManager } from "./CityManager";
import { serverRequest } from "../utils/http-request-helper";

/**
 * @param {boolean} isLogged Shows if user logged in.
 * 
 * @export
 * @interface AppState
 */
export interface AppState{
    isLogged: boolean
}

/**
 * Manages whole application.
 *
 * @export
 * @class App
 * @extends {React.Component<{}, AppState>}
 */
export class App extends React.Component<{}, AppState>{
    constructor(props:any){
        super(props);

        this.state = {isLogged: false};
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    }

    /**
     * Handles successful login.
     * 
     * @memberof App
     */
    handleLoginSuccess(){
        this.setState({isLogged: true});
    }
    /**
     * Handles logoff.
     * 
     * @memberof App
     */
    logoff(){
        serverRequest('logoff', {});
        this.setState({isLogged: false});
    }

    render(){
        if(this.state.isLogged){
            return(
                <div className="container">
                    <button className="btn" onClick={e => this.logoff()}>
                        Log off
                    </button>            
                    <CityManager />
                </div>
            );
        }
        return(
            <div className="container">
                <Login onLogin={this.handleLoginSuccess} />
            </div>
        );
    }
}