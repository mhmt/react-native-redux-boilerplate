import {combineReducers} from 'redux'
import InitialData from '../sampleData.json'
import {
    DATA_READY,
    DATA_READ_FROM_FILE,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA
} from '../actions/types'


let dataState={data:InitialData.instructions,loading:true}

const dataReducer = (state=dataState,action) =>{
    switch(action.type){
        case DATA_READ_FROM_FILE:
            return Object.assign({},state,{data:action.data !== null ? action.data:state.data,loading:false});
        break;  

        case DATA_READY:
            return Object.assign({},state,{loading:false});
        break;    

        case ADD_DATA:
            var nextState = state.data;
            nextState.unshift(action.added);
            return Object.assign({},state,nextState);
         break;  


        case UPDATE_DATA:
            var nextState = state.data;
            nextState[action.index] = action.updated;
            return Object.assign({},state,nextState);
            break;  


        case DELETE_DATA:
            var nextState = state.data;
            nextState.splice(action.index,1);
            return Object.assign({},state,nextState);
        break;  
    

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;