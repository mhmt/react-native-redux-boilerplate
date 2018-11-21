import * as actions from '../actions/types'
import Axios from 'axios'
const api = ({dispatch,getState})=> next => action =>{
    if(action.type !== actions.FETCH_PEOPLE)
        return next(action)

    const { url , done, error } = action.payload;

    Axios.get(url)
        .then( res => dispatch( done(res.data.results) ) )
        .catch(err => dispatch( error(err) ) )

}

export default api;

