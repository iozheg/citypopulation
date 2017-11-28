import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { CitiesTable } from '../CitiesTable';
import { CityRow } from '../CityRow';
import { mockCities } from './mocks';

describe('<CitiesTable />', ()=>{
    beforeEach(()=>{
        this.wrapper = enzyme.shallow(<CitiesTable
                                        cities={mockCities}
                                        onCitySelected={()=>{}}
                                    />)
    });

    it('should render a table at startup', () => {
        expect(this.wrapper.find('table')).toHaveLength(1);
    });

    it('shouldn render a number of CityRows at startup', () => {
        expect(this.wrapper.find(CityRow)).toHaveLength(mockCities.length);
    });

    it('should return city name by id', () =>{
        expect(this.wrapper.instance().getCityNameById(mockCities[0].id)).toBe(mockCities[0].name);
    });
});