import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ModalUpdate from './ModalUpdate';

describe('<PersonalInformaition />', (): void => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ModalUpdate onSubmitHandler={() => { }} />);
    });
    it('has to close modal when execute onSuccess', () => {
        const component = wrapper.instance() as ModalUpdate;
        component.onSuccess();
        expect(wrapper.state('modal')).toEqual(true)
    });
    it('has to close modal when execute toggle', () => {
        const component = wrapper.instance() as ModalUpdate;
        component.toggle();
        expect(wrapper.state('modal')).toEqual(true)
    });

})