import React,{Component} from 'react';
import './App.css';
import StudentInfo from './StudentInfo/StudentInfo';
import ErrorMessage from './errorMessage/ErrorMessage';
import StudentList from './StudentList/StudentList';
import StudentHeader from './StudentHaeder/StudentHeader';
import Grade from './Grades/Grades';
import StudentEditView from './StudentEditView/StudentEditView';

class App extends Component{

  name=null;
  marks=null;
  rollNumber=0;
  state={
    students:[],
    
  };
  minGrade=null;
  maxGrade=null;
  avgGrade=null;
  isEditable=false;
  

  onChangeNameHandler=(event)=>{
    console.log(event.target.value);
    this.name=event.target.value
  }

  onChangeMarksHandler=(event)=>{
    console.log(event.target.value);
    this.marks=event.target.value;
  }
  addStudentHandler=()=>{
    if(this.name===''|| this.name===undefined || this.name===null){
      alert('please input name');
      return false;
    }
    if(this.marks===''|| this.marks===undefined || this.marks===null  || this.marks<0 || this.marks>100 || isNaN(this.marks)){
      alert('please input marks')
      return false;
    }
    let newStudent =[...this.state.students]
    this.rollNumber= this.rollNumber +1
    newStudent.push({'rollNo':this.rollNumber, 'name':this.name, marks:this.marks, 'flag':false})
    this.setState({students:newStudent}); 
    this.studentNameField='';
  }

  calculateGrade(){
    let minMarks=[];
    this.state.students.map(student=>minMarks.push(Number(student.marks)))
    this.minGrade=Math.min(...minMarks);
    console.log(minMarks, this.minGrade);
    this.maxGrade=Math.max(...minMarks);
    console.log(minMarks, this.maxGrade);
   
    const sum = minMarks.reduce((acc,currValue)=>{
    return (acc+currValue);
    },0);
    this.avgGrade= sum/minMarks.length;
    console.log(this.avgGrade);
  }

  deleteStudentHandler=(index)=>{

    console.log(index);
    let deleteStudent=[...this.state.students]
    deleteStudent.splice(index,1);
    this.setState({students:deleteStudent});
  }

  editStudentHandler=(key)=>{ 
    let editInput=[...this.state.students];
    const editIndex = this.state.students.findIndex(item => item.rollNo===key) 
    editInput[editIndex].flag =true;
    this.setState({students:editInput});
    console.log(editIndex);
  }

  updateStudentHandler=(key)=>{
    let editInput=[...this.state.students];
    const editIndex = this.state.students.findIndex(item => item.rollNo===key) 
    editInput[editIndex].flag =false;
    this.setState({students:editInput});
    console.log(editIndex);
  }

  onEditStudentInput=(event,key)=>{
    let editStudent=[...this.state.students];
    const studentIndex = this.state.students.findIndex(item=> item.rollNo===key)
    editStudent[studentIndex].name=event.target.value;
    this.setState({students:editStudent});
    console.log(editStudent);
  }
  onEditStudentMarksInput=(event,key)=>{
    let editStudent=[...this.state.students];
    const studentIndex = this.state.students.findIndex(item=> item.rollNo===key)
    editStudent[studentIndex].marks=event.target.value;
    this.setState({students:editStudent});
    console.log(editStudent);
  }

  render(){
    console.log(this.isEditable)
    console.log(this.state.students);
    let students= null;
    console.log('hello')
    // debugger;
    if(this.state.students.length>0) {  
      this.calculateGrade(); 
      students = (
        <div>
          <Grade minimum={this.minGrade} maximum={this.maxGrade} average={this.avgGrade}></Grade>
          <StudentHeader></StudentHeader>
          <div>
           {this.state.students.map((student,index)=>{
             if(student.flag===false){
                return( 
                  <StudentList 
                  roll={student.rollNo} 
                  name={student.name} 
                  marks={student.marks}
                  key={student.rollNo}
                  onDeleteStudent={this.deleteStudentHandler.bind(this, index)}
                  onEditStudent ={()=> this.editStudentHandler(student.rollNo)}
                  />)
                }else{
                  return( 
                    <StudentEditView 
                    roll={student.rollNo} 
                    name={student.name} 
                    marks={student.marks}
                    key={student.rollNo}
                    onDeleteStudent={this.deleteStudentHandler.bind(this, index)}
                    onUpdateStudent ={()=>this.updateStudentHandler(student.rollNo)}
                    onChangeInputName={(event)=>this.onEditStudentInput(event,student.rollNo)}
                    onChangeInputMarks={(event)=>this.onEditStudentMarksInput(event,student.rollNo)}
                    />)
                }
              }
              )} 
            </div>
        </div>
      )
    }
    return (
      <div className="container">
        <StudentInfo 
          onChangeName={this.onChangeNameHandler}
          onChangeMarks={this.onChangeMarksHandler}
          onAddStudent={this.addStudentHandler}
        />
        <div style={{marginTop:'1.5rem'}}>
            {/* {this.state.students.map((student)=>{
              return <StudentList roll={student.rollNo} name={student.name} marks={student.marks}></StudentList>
            })} */}
          {students}
        </div>
        {/* <ErrorMessage errorMessage="Error Not Found"></ErrorMessage> */}
      </div>
    );
  }
}

export default App;
