import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { CityRow } from '../CityRow';

describe('<CityRow />', ()=>{
    beforeEach(()=>{
        this.mockHandler = jest.fn();//function(e: number){
        //     return e;
        // }
        let mockCity = {
            id:17, name:'City17', population:100
        }
        this.wrapper = enzyme.shallow(<CityRow
                                        city={mockCity}
                                        onClick={this.mockHandler}
                                    />)
    });

    it('should render a table row with 2 columns at startup', () => {
        expect(this.wrapper.find('tr')).toHaveLength(1);
        expect(this.wrapper.find('td')).toHaveLength(2);
    });

    it('should render first column with city name', ()=>{
        expect(this.wrapper.find('td').at(0).text()).toBe('City17');
    });

    it('should render second column with population', ()=>{
        expect(this.wrapper.find('td').at(1).text()).toBe('100');
    });

    it('should call callback with city id after row was clicked', ()=>{
        this.wrapper.find('tr').at(0).simulate('click');
        expect(this.mockHandler.mock.calls.length).toBe(1);
        expect(this.mockHandler.mock.calls[0][0]).toBe(17);
    });
});