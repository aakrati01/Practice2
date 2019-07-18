import React,{Component} from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../Actions/studentAction';

class StudentInfo extends Component{
    // onChange={(event)=> this.setState({name:event.target.value})}
  render(){
    return (
      
      <div>
        <form action=''>
        {/* <div className="col">
            <label style={{fontWeight: 500 }}>Roll Number</label>
            <input className="form-control" type="number" value={this.props.rollNumber} onChange={this.props.onChangeRollNumber}></input>
          </div> */}
          <div  className="row" style={{margin: "2rem" }}>          
            <div className="col">
              <label style={{fontWeight: 500 }}>Student Name</label>
              <input 
                className="form-control" 
                type="text" 
                value={this.props.name} 
                onChange={this.props.onChangeName} 
                ref={input =>
                this.studentNameField = input
                }>
              </input>
            </div>
            <div className="col">
              <label style={{fontWeight: 500 }}>Marks Obtained</label>
              <input className="form-control" type="number" value={this.props.marks} onChange={this.props.onChangeMarks}></input>
            </div>
          </div>
          
          <div style={{textAlign:"center"}}>
            <button type="button" className="btn btn-info btn-sm" onClick={this.props.onAddStudent}>Add Student</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect (
  null, {createStudent}
)(StudentInfo);

// export default StudentInfo;