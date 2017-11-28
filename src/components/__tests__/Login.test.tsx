import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { Login } from '../Login';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../RegisterForm';

describe('<Login />', ()=>{
    beforeEach(()=> 
        this.wrapper = enzyme.shallow(<Login onLogin={()=>{}} />)
    );

    it('should render a LoginForm at startup', () => {
        expect(this.wrapper.find(LoginForm)).toHaveLength(1);
    });

    it('shouldn\'t render a RegisterForm at startup', () => {
        expect(this.wrapper.find(RegisterForm)).toHaveLength(0);
    });

    it('should render RegisterForm after click on register tab', () => {
        this.wrapper.find('#register').simulate('click', {
                                                currentTarget: this.wrapper.find('#register'),
                                                preventDefault: ()=>{}
                                            });
        expect(this.wrapper.find(RegisterForm)).toHaveLength(1);
    });

    it('shouldn\'t render LoginForm after click on register tab', () => {
        this.wrapper.find('#register').simulate('click', {
                                                currentTarget: {id:'register'},
                                                preventDefault: ()=>{}
                                            });
        expect(this.wrapper.find(LoginForm)).toHaveLength(0);
    });

    it('should render LoginForm after click on login tab', () => {
        this.wrapper.find('#login').simulate('click', {
                                                currentTarget: {id:'login'},
                                                preventDefault: ()=>{}
                                            });
        expect(this.wrapper.find(LoginForm)).toHaveLength(1);
    });
});