import {combineReducers} from 'redux'

import {DATA_READY,ADD_DATA,UPDATE_DATA, DELETE_DATA} from '../actions/types'

let dataState={data:[],loading:true}

const dataReducer = (state=dataState,action) =>{
    switch(action.type){
        case DATA_READY:
            return Object.assign({},state,{data:action.data,loading:false});
        case ADD_DATA:
            return Object.assign({},state,{data:action.data});
        case UPDATE_DATA:
            return Object.assign({},state,{data:action.data})
        case DELETE_DATA:
            return Object.assign({},state,{data:action.data})
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;