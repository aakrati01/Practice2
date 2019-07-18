import { FETCH_STUDENT_LIST , CREATE_STUDENT, DELETE_STUDENT} from './type';

// export const createStudent =()=> dispatch =>{
//     fetch('https://')
//     .then(res =>res.json())
//     .then(data =>dispatch ({
//         type: CREATE_STUDENT,
//         payload : posts
//     }));
// }

export const createStudent =(content)=>({
    type: CREATE_STUDENT,
    payload : content
});

export const deleteStudent =()=> dispatch =>{
    fetch('https://')
    .then(res =>res.json())
    .then(data =>dispatch ({
        type: DELETE_STUDENT,
        // payload : posts
    }));
}
