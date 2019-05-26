import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Educations from './Educations';

describe('<Education />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Educations />);
    });

    it('when receive props, should render list of educations descriptions', () => {
        
        wrapper.setProps({
            educations: [
                {
                    course: 'Engenharia da Computação', 
                    institution: "Escola Politécnica de Pernambuco", 
                    start_date: "2013-01-04", 
                    end_date: "2018-01-04"
                }
            ]
        });

        expect(wrapper.find("[data-test='params']")).toHaveLength(1);

    });

});