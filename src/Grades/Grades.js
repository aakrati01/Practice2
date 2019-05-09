import React from 'react';
import './Grades.css'
const Grade=(props)=>{
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col-sm gradeContainer" >
                        <h4>Minimum Grade</h4>
                        <div>{props.minimum}</div>
                    </div>
                    <div className="col-sm gradeContainer">
                        <h4>Maximum Grade</h4>
                        <div>{props.maximum}</div>
                    </div>
                    <div className="col-sm gradeContainer">
                        <h4>Average Grade</h4>
                        <div>{props.average}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grade;