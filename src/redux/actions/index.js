import Axios from 'axios'
import * as actions from './types'

export const readData = (data)=> {
    return ( dispatch) => {
        dispatch({type:actions.DATA_READ_FROM_FILE,data})
    };
}

export function getData(){
    return ( dispatch) => {
        dispatch({type:actions.DATA_READY})
    };
}

export function addData(mData){
    return (dispatch) => {
        dispatch({type: actions.ADD_DATA,added: mData});
    };
}

export function updateData(index,mData){
    return (dispatch)=>{
        dispatch({type: actions.UPDATE_DATA,index,updated:mData});
    }
}

export function deleteData(index){
    return (dispatch)=>{
        dispatch({type: actions.DELETE_DATA, index});
    }
}

export const startFetch = () =>{
    return {
        type: actions.FETCH_START
    }
}

export const doneFetch = (data) =>{
    return {
        type: actions.FETCH_DONE,
        data
    }
}

export const errorFetch = (error) =>{
    return {
        type: actions.FETCH_ERROR,
        error
    }
}

export const FetchData = ()=>{
    let apiURL = "https://randomuser.me/api?results=15"
    return (dispatch)=>{
        dispatch({
            type:actions.FETCH_PEOPLE,
            payload:{
                url: apiURL,
                done:doneFetch,
                error:errorFetch
            }
        })
        
    }
}
