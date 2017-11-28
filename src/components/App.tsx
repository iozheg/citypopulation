import * as React from "react";

import { Login } from "./Login";
import { CityManager } from "./CityManager";
import { serverRequest } from "../utils/http-request-helper";

export interface AppState{
    /** Shows if user logged in. */
    isLogged: boolean
}

/** Manages whole application. */
export class App extends React.Component<{}, AppState>{
    constructor(props:any){
        super(props);

        this.state = {isLogged: false};
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    }

    /** Handles successful login. */
    handleLoginSuccess(){
        this.setState({isLogged: true});
    }
    /** Handles logout. */
    logout(){
        serverRequest('logout', {});
        this.setState({isLogged: false});
    }

    render(){
        if(this.state.isLogged){
            return(
                <div className="container">
                    <button className="btn" onClick={e => this.logout()}>
                        Log out
                    </button>            
                    <CityManager requestHandler={serverRequest}/>
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