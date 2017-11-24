import * as React from "react";

import { InputComponent } from './InputComponent';
import { serverRequest } from "../utils/http-request-helper";

export interface LoginFormState {
    username: string;
    password: string;
}

export interface LoginFormProp {
    onLogin: ()=>void;
}

export class LoginForm extends React.Component<LoginFormProp,LoginFormState>{

    constructor(props:any){
        super(props);

        this.state = {
            username: '',
            password: '',
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
                    : false;
            }
        );
        e.preventDefault();
    }

    render(){
        return(
            <div className="text-center">
            <h3>Login</h3>
            <form className="login-form">
                <div className="form-group">
                    <InputComponent 
                        name="username" 
                        placeholder="Username" 
                        onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <InputComponent 
                        name="password" 
                        placeholder="Password" 
                        type="password" 
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