import {combineReducers} from 'redux'
import InitialData from '../sampleData.json'
import {
    DATA_READY,
    DATA_READ_FROM_FILE,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA,
    FETCH_START,
    FETCH_DONE,
    FETCH_ERROR
} from '../actions/types'
import {List} from 'immutable'


let dataState={data:InitialData.instructions,loading:true}

const dataReducer = (state=dataState,action) =>{
    switch(action.type){
        case DATA_READ_FROM_FILE:
            return Object.assign({},state,{data:action.data !== null ? action.data:state.data,loading:false});

        case DATA_READY:
            return Object.assign({},state,{loading:false});
   
        case ADD_DATA:
            return Object.assign({},state,{data:List(state.data).insert(0,action.added).toArray()});

        case UPDATE_DATA:
            return Object.assign({},state,{data: List(state.data).set(action.index,action.updated).toArray()});
        
        case DELETE_DATA:
            return Object.assign({},state,{data:List(state.data).delete(action.index).toArray()});
        
        case FETCH_START:
            return Object.assign({},state,{loading:true});

        case FETCH_DONE:
            return Object.assign({},state,{people:action.data ,loading:false});

        case FETCH_ERROR:
            return Object.assign({},state,{loading:false});
            
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;