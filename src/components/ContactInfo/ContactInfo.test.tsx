import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ContactInfo from './ContactInfo';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import ModalContactInfo from './ModalContactInfo/ModalContactInfo';

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

    it('when authenticated, has to show the modal and update', () => {
        wrapper.setProps({
            authenticated: true
        });
        expect(wrapper.find(ModalContactInfo)).toHaveLength(1);
        expect(wrapper.find(ModalUpdate)).toHaveLength(1);
    });

    it('when not authenticated, not show the modal or update button', () => {
        wrapper.setProps({
            authenticated: false
        });
        expect(wrapper.find(ModalContactInfo)).toHaveLength(0);
        expect(wrapper.find(ModalUpdate)).toHaveLength(0);
    });

    

});