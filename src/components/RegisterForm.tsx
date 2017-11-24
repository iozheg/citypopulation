import * as React from "react";

import { InputComponent } from './InputComponent';
import { serverRequest } from '../utils/http-request-helper';
import { LoginFormState, LoginFormProp } from './LoginForm'

export class RegisterForm extends React.Component<LoginFormProp,LoginFormState>{

    constructor(props:any){
        super(props);

        this.state = {
            username: '',
            password: ''
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
            })
            .then(text =>{
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
