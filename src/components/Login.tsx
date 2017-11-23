import * as React from 'react';
import { ChangeEvent } from 'react';

import { LoginForm } from './LoginForm';



export class Login extends React.Component <{}, {}>{   

    render(){
        return(
            <LoginForm />
        );
    }
}