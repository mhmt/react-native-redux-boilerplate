const logger = ({dispatch,getState})=> next => action =>{
    console.log('====================================');
    console.log(action.type);
    console.log('====================================');
    
    return next(action)
}
export default  logger;   

