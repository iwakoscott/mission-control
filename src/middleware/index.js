import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default applyMiddleware(thunk);
