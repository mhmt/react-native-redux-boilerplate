const crashHandler = ({dispatch,getState})=> next => action =>{
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
    }
}
export default  crashHandler