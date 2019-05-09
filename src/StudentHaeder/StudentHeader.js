import React from 'react';

const StudentHeader =()=>{
    return(
        <div className="table-responsive-sm">
            <table className="table">
                <thead className="table-secondary">
                    <tr>
                    <th scope="col"  style={{width:"20rem"}}>#</th>
                    <th scope="col"  style={{width:"20rem"}}>Student Name</th>
                    <th scope="col"  style={{width:"60rem"}}>Marks Obtained</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default StudentHeader;