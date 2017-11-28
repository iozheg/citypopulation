import * as React from "react";

import { InputComponent } from './InputComponent';
import { serverRequest } from "../utils/http-request-helper";

export interface LoginFormState {
    /** Entered username. */
    username: string;
    /** Entered password. */
    password: string;
    /** Error message from server. */
    error: string;
}

export interface LoginFormProp {
    /** Callback to notify if login succeed. */
    onLogin: ()=>void;
}

/** Renders user login form. */
export class LoginForm extends React.Component<LoginFormProp,LoginFormState>{

    constructor(props:any){
        super(props);

        this.state = {
            username: '',
            password: '',
            error: null
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleNameChange(value: string): void{
        this.setState({username: value});
    }

    handlePasswordChange(value: string): void{
        this.setState({password: value});
    }
    
    handleLogin(e: React.MouseEvent<HTMLButtonElement>): void{
        serverRequest('login', {
            username: this.state.username,
            password: this.state.password
        })
        .then( text =>{
                text === 'user logged in'
                    ? this.props.onLogin()
                    : this.setState({error: text});
            }
        );
        e.preventDefault();
    }

    render(){
        return(
            <div className="text-center">
            <h3>Login</h3>
            <form className="login-form">
                {this.state.error != null 
                    && <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
                }
                <div className="form-group">
                    <InputComponent
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <InputComponent
                        name="password"
                        placeholder="Password"
                        type="password"                        
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                </div>
                <button 
                    className="btn btn-primary pull-left"
                    type="submit" 
                    onClick={this.handleLogin}> Log in </button>                  
            </form>
        </div>
        );
    }
}