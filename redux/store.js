import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import { usersReducer } from '../modules/users/store/user.reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: usersReducer,
});

const middlewares = [thunk];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), composeEnhancers())
);

export default store;