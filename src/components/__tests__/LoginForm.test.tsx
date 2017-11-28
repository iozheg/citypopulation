import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { LoginForm } from '../LoginForm';
import { InputComponent } from '../InputComponent';

describe('<LoginForm />', ()=>{
    beforeEach(()=> 
        this.wrapper = enzyme.shallow(<LoginForm onLogin={()=>{}} />)
    );

    it('should render a 2 InputComponent at startup', () => {
        expect(this.wrapper.find(InputComponent)).toHaveLength(2);
    });

    it('shouldn\'t show error message at startup', ()=>{
        expect(this.wrapper.find('.alert')).toHaveLength(0);
    });

    it('should receive changed username value from first child',()=>{
        this.wrapper.find(InputComponent).first().simulate('change', 'USER');
        expect(this.wrapper.state().username).toBe('USER');
    });
    it('should receive changed password value from second child',()=>{
        this.wrapper.find(InputComponent).at(1).simulate('change', 'PASS');
        expect(this.wrapper.state().password).toBe('PASS');
    });
});