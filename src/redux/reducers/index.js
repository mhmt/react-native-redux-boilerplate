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
            return Object.assign({},state,{data:[action.added,...state.data]});
        break;  


        case UPDATE_DATA:
            return Object.assign({},state,{data:state.data.map((each,index)=>{
                if(index == action.index) return Object.assign({},each,action.updated)
                return each
            })});
        

        case DELETE_DATA:
            return Object.assign({},state,{
                data:state.data.filter(data => data !== state.data[action.index])
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;