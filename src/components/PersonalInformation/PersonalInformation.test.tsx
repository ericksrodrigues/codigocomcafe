import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import PersonalInformation from './PersonalInformation';
import ModalPersonalInformation from './ModalPersonalInformation/ModalPersonalInformation';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';

describe('<PersonalInformaition />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<PersonalInformation username="user" />);
    })
    it('have to show name, job and resume', () => {
        wrapper.setProps({
            name: 'test',
            job: 'test',
            resume: 'test',
        });
        expect(wrapper.find('[data-test="params"]')).toHaveLength(3)
    });
    it('when authenticated, has to show the modal and update', () => {
        wrapper.setProps({
            authenticated: true
        });
        expect(wrapper.find(ModalPersonalInformation)).toHaveLength(1);
        expect(wrapper.find(ModalUpdate)).toHaveLength(1);
    });
    it('when not authenticated, not show the modal or update button', () => {
        wrapper.setProps({
            authenticated: false
        });
        expect(wrapper.find(ModalPersonalInformation)).toHaveLength(0);
        expect(wrapper.find(ModalUpdate)).toHaveLength(0);
    });
})