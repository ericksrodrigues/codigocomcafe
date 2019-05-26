import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Languages from './Languages';
import ModalLanguages from './ModalLanguages/ModalLanguages';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';

describe('<Languages />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<Languages languages={[]} onUpdate={() => { }} username="user" />);
    })
    it('has to show all languages correctly', () => {
        wrapper.setProps({
            languages: [{
                language: "Inglês",
                level: "intermediate"
            },
            {
                language: "Espanhol",
                level: "advanced"
            },
            {
                language: "Português",
                level: "fluent"
            }],
        });
        expect(wrapper.find('.languages')).toHaveLength(3);
    });
    it('when authenticated, has to show the modal and update', () => {
        wrapper.setProps({
            authenticated: true
        });
        expect(wrapper.find(ModalLanguages)).toHaveLength(1);
        expect(wrapper.find(ModalUpdate)).toHaveLength(1);
    });
    it('when not authenticated, not show the modal or update button', () => {
        wrapper.setProps({
            authenticated: false
        });
        expect(wrapper.find(ModalLanguages)).toHaveLength(0);
        expect(wrapper.find(ModalUpdate)).toHaveLength(0);
    });
})