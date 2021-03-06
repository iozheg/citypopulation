import * as React from 'react';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export interface LoginState{
    /** Shows which component render: LoginForm or RegisterForm. */
    showLoginForm: boolean
}

export interface LoginProps{
    /** Callback to notify parent that login is successfull. */
    onLogin: ()=>void
}

/** Manages user login/register. */
export class Login extends React.Component <LoginProps, LoginState>{   

    constructor(props:any){
        super(props);
        this.state = {showLoginForm: true};

        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    }

    handleTabClick(e: React.MouseEvent<HTMLLIElement>): void{
        e.preventDefault();
        if(e.currentTarget.id == 'login'){
            this.setState({showLoginForm: true});
        } else {
            this.setState({showLoginForm: false});
        }
    }

    handleLoginSuccess(){
        this.props.onLogin();
    }

    render(){
        return(
            <div className="tab-container">
                <ul className="nav nav-tabs">
                    <li 
                        id="login" 
                        className={this.state.showLoginForm ? 'active' : ''} 
                        onClick={e => this.handleTabClick(e)}
                    > 
                        <a href="#"> Login </a> 
                    </li>
                    <li 
                        id="register" 
                        className={this.state.showLoginForm ? '' : 'active'}
                        onClick={e => this.handleTabClick(e)}
                    > 
                        <a href="#"> Register </a> 
                    </li>
                </ul>
                {this.state.showLoginForm 
                    ? <LoginForm onLogin={this.handleLoginSuccess} /> 
                    : <RegisterForm onLogin={this.handleLoginSuccess} />}
            </div>
        );
    }
}