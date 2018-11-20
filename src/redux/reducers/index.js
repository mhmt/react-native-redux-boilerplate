import {combineReducers} from 'redux'
import InitialData from '../sampleData.json'
import * as actions from '../actions/types'
import {List} from 'immutable'

let dataState={data:[],loading:true}
let peopleState={people:[],loading:true}

const dataReducer = (state=dataState,action) =>{
    switch(action.type){
        case actions.DATA_READ_FROM_FILE:
            return Object.assign({},state,{data:action.data !== null ? action.data:state.data,loading:false});

        case actions.DATA_READY:
            return Object.assign({},state,{data:InitialData.instructions ,loading:false});

        case actions.ADD_DATA:
            return Object.assign({},state,{data:List(state.data).unshift(action.added).toArray()});
        
        case actions.UPDATE_DATA:
            return Object.assign({},state,{data: List(state.data).set(action.index,action.updated).toArray()});
        
        case actions.DELETE_DATA:
            return Object.assign({},state,{data:List(state.data).delete(action.index).toArray()});
        
        default:
            return state;
    }
}

const peopleReducer = (state=peopleState,action)=>{
    switch(action.type){
        case actions.FETCH_START:
            return Object.assign({},state,{loading:true});

        case actions.FETCH_DONE:
            return Object.assign({},state,{people:action.data ,loading:false});

        case actions.FETCH_ERROR:
            return Object.assign({},state,{loading:false,error});
            
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    data:dataReducer,people:peopleReducer
})

export default rootReducer;