import React,{Component} from 'react';

class StudentEditView extends Component {
    render(){
    const display= this.props.marks<65 ? 'table-warning':'';
    return(
        <div>
            <table className="table">
                <tbody>
                    <tr className={display}>
                        <th scope="row" style={{width:"20rem"}}>
                            {this.props.roll}
                        </th>
                        <td style={{width:"20rem"}}>
                            <input type="text" value={this.props.name} onChange={this.props.onChangeInputName}></input>
                        </td>
                        <td style={{width:"20rem"}}>
                            <input type="number" value={this.props.marks} onChange={this.props.onChangeInputMarks}></input>
                        </td>

                        <div style={{marginTop: '.75rem', width: '20rem'}}>  
                            <span style={{cursor:'pointer'}} onClick={this.props.onUpdateStudent} aria-hidden="true">Update</span>
                    
                            <button  style={{marginRight: '2.5rem'}} type="button" className="close" aria-label="Close" onClick={this.props.onDeleteStudent}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
}
}

export default StudentEditView;