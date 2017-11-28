import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { App } from '../App';
import { Login } from '../Login';
import { CityManager } from '../CityManager';

describe('<App />', ()=>{
    beforeEach(()=> 
        this.wrapper = enzyme.shallow(<App />)
    );
    it('should render a Login component at startup', () => {
        expect(this.wrapper.find(Login)).toHaveLength(1);
        expect(this.wrapper.find(CityManager)).toHaveLength(0);
    });

    it('should render CityManager if state.isLogged==true', () => {
        this.wrapper.setState({isLogged: true});        
        expect(this.wrapper.find(Login)).toHaveLength(0);
        expect(this.wrapper.find(CityManager)).toHaveLength(1);
    });
});