import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from './middleware/logger'
import api from './middleware/api'
import crashHandler from './middleware/crashHandler'

const store = createStore(rootReducer,applyMiddleware(logger,crashHandler,api,thunk));
export default store;