import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { InfoList } from '../../utils/customTypes';
import ListDisplay from './ListDisplay';


describe('<ListDisplay />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<ListDisplay />);
    });

    it('should render a list of structured elements definied by props', () => {

        let informations: InfoList = {
            list_name: "testing",
            elements: [{name: "name01", age: 25}, {name: "name01", age: 25}, {name: "name01", age: 25}],
            field_levels: [{name: "name", level: 1}, {name: "age", level: 2}]
        }

        wrapper.setProps({
            informations
        });

        expect(wrapper.find(".info-level-one")).toHaveLength(3);
        expect(wrapper.find(".info-level-two")).toHaveLength(3);
    });

});