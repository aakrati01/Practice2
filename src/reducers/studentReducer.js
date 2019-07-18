import { FETCH_STUDENT_LIST , CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT} from '..Actions/type';

const initialState ={
    items:[],
    item:{}
}

export default function (state = initialState, action){
    switch(action.type){
        case CREATE_STUDENT :
            return {
                ...state,
                items: action.payload
            }
        case UPDATE_STUDENT :
            return {
                ...state,
                items: action.payload
            }
        case DELETE_STUDENT :
            return {
                ...state,
                items: action.payload
            }
        case FETCH_STUDENT_LIST:
                return {
                    ...state,
                    items: action.payload
                }
            default:
                return state;
    }
}