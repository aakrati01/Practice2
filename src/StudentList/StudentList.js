import React from 'react';

const StudentList =(props)=>{
    const display= props.marks<65 ? 'table-warning':'';
    return(
        <div  className="table-responsive-sm">
            <table className="table">
                <tbody>
                    <tr className={display}>
                        <th scope="row" style={{width:"20rem"}}>{props.roll}</th>
                        <td  style={{width:"20rem"}}>{props.name}</td>
                        <td  style={{width:"20rem"}}>{props.marks}</td>
                
                        <div style={{marginTop: '.75rem', width: '20rem'}}>
                            <span style={{cursor:'pointer'}} onClick={props.onEditStudent} aria-hidden="true">Edit</span>
                            <button style={{marginRight: '2.5rem'}}type="button" className="close" aria-label="Close" onClick={props.onDeleteStudent}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>                    
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default StudentList;