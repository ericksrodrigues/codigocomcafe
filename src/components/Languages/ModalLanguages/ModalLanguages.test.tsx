import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ModalLanguages from './ModalLanguages';

describe('<ModalLanguages />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ModalLanguages languages={[]} username="user" />);
    });
    it('has to change state after change inputs', (): void => {
        wrapper.find("#language").simulate('change', {
            target: {
                value: 'Português'
            }
        });
        wrapper.find("#level").simulate('change', {
            target: {
                value: 'fluent'
            }
        })
        const modal = wrapper.instance() as ModalLanguages;
        expect(modal.state.newLanguage).toEqual(
            {
                language: "Português",
                level: "fluent"
            }
        );
    });
    it('has to add on click in add button', () => {
        wrapper.find("#language").simulate('change', {
            target: {
                value: 'Português'
            }
        });
        wrapper.find("#level").simulate('change', {
            target: {
                value: 'fluent'
            }
        });
        wrapper.find("#add_language").simulate('click');
        const modal = wrapper.instance() as ModalLanguages;
        const languages = modal.state.languages;
        expect(languages).toEqual([{
            language: "Português",
            level: "fluent"
        }]);
});

})