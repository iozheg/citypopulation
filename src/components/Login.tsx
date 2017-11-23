import * as React from 'react';
import { ChangeEvent } from 'react';

import { LoginForm } from './LoginForm';

export interface LoginState{
    showLoginForm: boolean
}

export class Login extends React.Component <{}, LoginState>{   

    constructor(props:any){
        super(props);
        this.state = {showLoginForm: true};
    }

    handleTabClick(e: React.MouseEvent<HTMLLIElement>): void{
        e.preventDefault();
        if(e.currentTarget.id == 'login'){
            this.setState({showLoginForm: true});
        } else {
            this.setState({showLoginForm: false});
        }
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
                <LoginForm />
            </div>
        );
    }
}