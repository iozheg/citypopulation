import * as React from "react";

import { InputComponent } from './InputComponent';

export interface LoginState {
    username: string;
    password: string;
}

export class LoginForm extends React.Component<{},LoginState>{

    constructor(props:any){
        super(props);

        this.state = {
            username: "",
            password: "",
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
        alert(this.state.username + " " + this.state.password);
        e.preventDefault();
    }

    handleRegister(e: React.MouseEvent<HTMLButtonElement>): void{
    //    this.setState();
        e.preventDefault();
    }

    render(){
        return(
            <div className="container text-center">
            <h2>Login</h2>
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
                <div className="btn-group btn-group-justified">
                    <div className="btn-group">
                        <button 
                            className="btn btn-primary"
                            type="submit" 
                            onClick={this.handleLogin}> Log in </button> 
                    </div>
                    <div className="btn-group">
                        <button 
                            className="btn btn-default"
                            onClick={this.handleRegister}> Register </button>
                    </div>               
                </div>
            </form>
        </div>
        );
    }
}