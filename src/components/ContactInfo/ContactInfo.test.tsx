import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ContactInfo from './ContactInfo';

describe('<ContactInfo />', (): void => {

    let wrapper: ShallowWrapper;
    
    beforeEach(() => {
        wrapper = shallow(<ContactInfo />);
    });

    it('should render a ContactInfo Component', (): void => {
        let element: ShallowWrapper = wrapper.find("[data-test='contact-info']");
        expect(element.length).toBe(1);
    });

    it('should receive all contact info from props', () => {

        wrapper.setProps({
            email: 'test',
            phone_number: 'test',
            address: 'test',
            social_media: 'test',
        });

        let element: ShallowWrapper = wrapper.find("[data-test='params']");
        expect(element).toHaveLength(4); 
    });

});