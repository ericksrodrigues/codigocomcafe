import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ModalPersonalInformation from './ModalPersonalInformation';

describe('<PersonalInformaition />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ModalPersonalInformation username="user" />);
    });
    
})