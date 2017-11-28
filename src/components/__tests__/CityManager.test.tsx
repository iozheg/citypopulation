import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import { CityManager } from '../CityManager';
import { CitiesTable } from '../CitiesTable';
import { MapComponent } from '../Map';
import { Chart } from '../Chart';
import { mockCities } from './mocks';

describe('<CityManager />', ()=>{
    beforeEach( ()=>{
        let resolveFunction: Function;
        let fakeRequestHandler = function(...args:any[]){
                        return new Promise(
                                (resolve, reject) => resolveFunction=resolve
                            );
                    }
        this.wrapper = enzyme.shallow(<CityManager requestHandler={fakeRequestHandler}/>);
        resolveFunction(JSON.stringify(mockCities));
    });

    it('should render a CitiesTable at startup', () => {
        this.wrapper.update();
        expect(this.wrapper.find(CitiesTable)).toHaveLength(1);
    });

    it('should render a Map at startup', () => {
        expect(this.wrapper.find(MapComponent)).toHaveLength(1);
    });

    it('shouldn\'t render a Chart at startup', () => {
        expect(this.wrapper.find(Chart)).toHaveLength(0);
    });

    it('should render a Chart after button Chart was clicked', () => {
        this.wrapper.find('button').simulate('click');
        expect(this.wrapper.state().showChart).toBeTruthy();
        expect(this.wrapper.find(Chart)).toHaveLength(1);
    });

    it('shouldn\'t render a Map after button Chart was clicked', () => {
        this.wrapper.find('button').simulate('click');
        expect(this.wrapper.find(MapComponent)).toHaveLength(0);
    });

    it('should have state.selectedCity after row of table was clicked', () => {
        this.wrapper.update();
        this.wrapper.find(CitiesTable).at(0).simulate('citySelected', 'City17');
        expect(this.wrapper.state().selectedCity).toBe('City17');
    });
});