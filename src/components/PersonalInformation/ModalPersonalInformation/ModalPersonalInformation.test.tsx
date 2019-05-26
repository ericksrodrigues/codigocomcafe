import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ModalPersonalInformation from './ModalPersonalInformation';

describe('<PersonalInformaition />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ModalPersonalInformation username="user" />);
    });
    it('has to change state after change inputs', (): void => {
        wrapper.find("#name").simulate('change', {
            target: {
                value: 'name'
            }
        });
        wrapper.find("#job").simulate('change', {
            target: {
                value: 'job'
            }
        });
        wrapper.find("#resume").simulate('change', {
            target: {
                value: 'resume'
            }
        });
        const modal = wrapper.instance() as ModalPersonalInformation;
        expect(modal.state).toEqual({
            name: "name",
            job: "job",
            resume: "resume"
        });
    });

})