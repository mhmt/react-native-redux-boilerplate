import Axios from 'axios'
import { 
    DATA_READY,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA,
    DATA_READ_FROM_FILE,
    FETCH_START,
    FETCH_DONE,
    FETCH_ERROR
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

export const startFetch = () =>{
    console.log("Fetch Started")

    return {
        type: FETCH_START
    }
}

export const doneFetch = (data) =>{
    console.log("Fetch Done. Data: "+data)

    return {
        type: FETCH_DONE,
        data
    }
}

export const errorFetch = (error) =>{
    console.log("Fetch Error: "+error)

    return {
        type: FETCH_ERROR,
        error
    }
}

export const FetchData = ()=>{
    let apiURL = "https://randomuser.me/api?results=15"
    return (dispatch)=>{
        dispatch(startFetch())
        Axios.get(apiURL).then((res)=>{
            let response = (res.data.results);
            dispatch(doneFetch(response));
        }).catch((err)=>{
            dispatch(errorFetch(err))
        })
        
    }
}