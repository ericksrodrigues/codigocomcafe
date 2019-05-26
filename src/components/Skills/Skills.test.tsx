import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Skills from './Skills';
import ModalSkills from './ModalSkills/ModalSkills';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';

describe('<Skills />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<Skills skills={[]} onUpdate={() => { }} username="user" />);
    })
    it('has to show all skills correctly', () => {
        wrapper.setProps({
            skills: [{
                skill: "Pentaho",
                level: "intermediate"
            },
            {
                skill: "Javascript",
                level: "advanced"
            },
            {
                skill: "Typescript",
                level: "beginner"
            }],
        });
        expect(wrapper.find('.skills')).toHaveLength(3);
    });
    it('when authenticated, has to show the modal and update', () => {
        wrapper.setProps({
            authenticated: true
        });
        expect(wrapper.find(ModalSkills)).toHaveLength(1);
        expect(wrapper.find(ModalUpdate)).toHaveLength(1);
    });
    it('when not authenticated, not show the modal or update button', () => {
        wrapper.setProps({
            authenticated: false
        });
        expect(wrapper.find(ModalSkills)).toHaveLength(0);
        expect(wrapper.find(ModalUpdate)).toHaveLength(0);
    });
})