import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { InputComponent } from '../InputComponent';

describe('<InputComponent />', ()=>{
    beforeEach(()=> 
        this.wrapper = enzyme.shallow(<InputComponent
                                        name="inputname"
                                        type="inputtype"
                                        value="inputvalue" />)
    );

    it('should render input with provided name', () => {
        expect(this.wrapper.find('input').props().name).toBe('inputname');
    });

    it('should render input with provided type', () => {
        expect(this.wrapper.find('input').props().type).toBe('inputtype');
    });

    it('should render input with provided value', () => {
        expect(this.wrapper.find('input').props().value).toBe('inputvalue');
    });
});