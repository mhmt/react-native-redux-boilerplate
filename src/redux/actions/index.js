import Data from '../sampleData.json';


export const DATA_READY ="DATA_READY";

export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_READY, data});
        }, 2000);
 
    };
}