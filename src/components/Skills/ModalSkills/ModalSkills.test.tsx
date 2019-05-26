import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ModalSkills from './ModalSkills';

describe('<ModalSkills />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ModalSkills skills={[]} username="user" />);
    });
    it('has to change state after change inputs', (): void => {
        wrapper.find("#skill").simulate('change', {
            target: {
                value: 'Banco de dados'
            }
        });
        wrapper.find("#level").simulate('change', {
            target: {
                value: 'advanced'
            }
        })
        const modal = wrapper.instance() as ModalSkills;
        expect(modal.state.newSkills).toEqual(
            {
                skill: "Banco de dados",
                level: "advanced"
            }
        );
    });
    it('has to add on click in add button', () => {
        wrapper.find("#skill").simulate('change', {
            target: {
                value: 'Banco de dados'
            }
        });
        wrapper.find("#level").simulate('change', {
            target: {
                value: 'advanced'
            }
        });
        wrapper.find("#add_skill").simulate('click');
        const modal = wrapper.instance() as ModalSkills;
        const skills = modal.state.skills;
        expect(skills).toEqual([{
            skill: "Banco de dados",
            level: "advanced"
        }]);
    });
    it('cannot add empty skills', () => {
        wrapper.find("#skill").simulate('change', {
            target: {
                value: ''
            }
        });
        wrapper.find("#add_skill").simulate("click");
        const modal = wrapper.instance() as ModalSkills;
        const skills = modal.state.skills;
        expect(skills).toHaveLength(0);
    })

})