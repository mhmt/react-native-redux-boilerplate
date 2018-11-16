import { 
    DATA_READY,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA,
    DATA_READ_FROM_FILE
} from './types'

export const readData = (data)=> {
    return ( dispatch) => {
        dispatch({type:DATA_READ_FROM_FILE,data})
    };
}

export function getData(){
    return ( dispatch) => {
        dispatch({type:DATA_READY})
    };
}

export function addData(mdata){
    return (dispatch) => {
        dispatch({type: ADD_DATA,added: mdata});
    };
}

export function updateData(index,Mdata){
    return (dispatch)=>{
        dispatch({type: UPDATE_DATA,index,updated:Mdata});
    }
}

export function deleteData(index){
    return (dispatch)=>{
        dispatch({type: DELETE_DATA, index});
    }
}