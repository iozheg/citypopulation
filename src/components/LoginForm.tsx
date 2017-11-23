import * as React from "react";

import { InputComponent } from './InputComponent';

export interface LoginFormState {
    username: string;
    password: string;
}

export class LoginForm extends React.Component<{},LoginFormState>{

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
        alert(this.state.username + ' ' + this.state.password);
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