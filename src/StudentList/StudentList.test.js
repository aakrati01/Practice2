// react-scripts test
import React from 'react';
import StudentList from './StudentList';
import { shallow } from 'enzyme';

const student = {
    name: 'Animesh'
}


describe ('<StudentList />', () => {

    it('should render student list', () => {
        const wrapper = shallow(<StudentList />);   
      });
      
    it ('accepts student props', () => {
        const wrapper = mount(<StudentList student={student} />)
        expect(wrapper.props().name).toEqual(student.name)
      })
})