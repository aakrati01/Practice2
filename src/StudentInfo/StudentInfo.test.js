
import React from 'react';
import StudentInfo from './StudentInfo';
import { shallow } from "enzyme";
import Enzyme from 'enzyme';

const studentData = {studentName:'Hello', marks: 1};
const onAddStudent = jest.fn();

describe("StudentInfo", () => {
  let wrapper;            
  beforeEach(() => {
      wrapper = shallow(<StudentInfo />);
  });

  // beforeEach(() => {
  //   wrapper = shallow(<StudentInfo studentData={studentData} onAddStudent={onAddStudent}/>);
  // });

  it('renders the StudentItem Component', () => {
    expect(wrapper.find('StudentInfo')).toBeDefined();
  });

  // it("onAddStudent function to be called", () => {
  //   expect(wrapper.instance().onAddStudent()).toBeUndefined();
  //   wrapper.setState({ isEditClicked: true });
  // });

  // it("Simulate the click on button", () => {
  //   const event = { preventDefault: () => {} };
  //   wrapper.find('.btn').simulate('click');
  //   wrapper.instance().onAddStudent(event);
  //   });
});