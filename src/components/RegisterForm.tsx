import * as React from "react";

import { InputComponent } from './InputComponent';

export interface LoginFormState {
    username: string;
    password: string;
}

export class RegisterForm extends React.Component<{},LoginFormState>{

    constructor(props:any){
        super(props);

        this.state = {
            username: '',
            password: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange(value: string): void{
        this.setState({username: value});
    }

    handlePasswordChange(value: string): void{
        this.setState({password: value});
    }

    handleRegister(e: React.MouseEvent<HTMLButtonElement>): void{
        serverRequest('register', {
                username: this.state.username,
                password: this.state.password
            });
        e.preventDefault();
    }

    render(){
        return(
            <div className="text-center">
                <h3>Register</h3>
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
                        onClick={e => this.handleRegister(e)}> Register </button>
                </form>
            </div>
        );
    }
}

interface HttpRequest{
    username?: string;
    password?: string;
}

function serverRequest(type: string, request: HttpRequest): void{
    let url: string;
    let options = {
        method: '',
        headers: new Headers(),
        body: ''
    };

    if(type === 'register'){
        url = 'localhost/register';
        options.method = 'POST';
        options.headers = new Headers();  
        options.body = `username=${request.username}&password=${request.password}`;
    } else {
        return;
    }
    fetch(url, options)
        .then(response => console.log(response.status));
}