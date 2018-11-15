import Data from '../sampleData.json';
import { 
    DATA_READY,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA
} from './types'
import {AsyncStorage} from "react-native";


export function getData(){
    return (dispatch) => {
        init = Data.instructions
        AsyncStorage.getItem("data",(err,data)=>{
            if(data !== null){
                data = JSON.parse(data)
                dispatch({type:DATA_READY,data})
            }else{
                AsyncStorage.setItem("data",JSON.stringify(init),()=>{
                    dispatch({type:DATA_READY,data:init})

                })
            }
        })

 
    };
}

export function addData(mdata){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, data) => {
            if (data !== null){
                data = JSON.parse(data);
                data.unshift(mdata); //add the new quote to the top
                AsyncStorage.setItem('data', JSON.stringify(data), () => {
                    dispatch({type: ADD_DATA, data});
                });
            }else{
                let initial = new Array()
                initial.push(mdata)
                AsyncStorage.setItem('data', JSON.stringify(initial), () => {
                    dispatch({type: ADD_DATA, data:initial});
                });
            }
        });
    };
}

export function updateData(index,Mdata){
    return (dispatch)=>{
        AsyncStorage.getItem('data', (err, data) => {
            if (data !== null){
                data = JSON.parse(data);
                data[index] = Mdata;
                AsyncStorage.setItem('data', JSON.stringify(data), () => {
                    dispatch({type: UPDATE_DATA, data});
                });
            }
        });
    }
}

export function deleteData(index){
    return (dispatch)=>{
        AsyncStorage.getItem('data', (err, data) => {
            if (data !== null){
                data = JSON.parse(data);
                data.splice(index,1);
                AsyncStorage.setItem('data', JSON.stringify(data), () => {
                    dispatch({type: DELETE_DATA, data});
                });
            }
        });
    }
}