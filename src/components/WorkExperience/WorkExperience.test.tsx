import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import WorkExperience from './WorkExperience';

describe('<WorkExperience />', () => {

    let wrapper: ShallowWrapper;
    
    beforeEach(() => {
        wrapper = shallow(<WorkExperience />);
    });

    it('when receive props, has to show a list of Work Experiences', () => {
        
        wrapper.setProps({
            experiences: [
                {job_name: 'Job Name 01', start_date: '2017-01-20', end_date: '-', rule: 'Rule Name', tasks: ['task 01', 'task 02', 'task 03']},
                {job_name: 'Job Name 02', start_date: '2016-01-20', end_date: '2016-12-01', rule: 'Rule Name', tasks: ['task 01', 'task 02', 'task 03']},
                {job_name: 'Job Name 03', start_date: '2015-01-20', end_date: '2016-12-01', rule: 'Rule Name', tasks: ['task 01', 'task 02', 'task 03']},
            ]
        });

        expect(wrapper.find("[data-test='params']")).toHaveLength(3);
    });

});