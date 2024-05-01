import {combineReducers, createStore} from 'redux';
import LoginReducer from './Login/reducer';
import ErrorReducer from './Error/reducer';
import { DisplayNameReducer } from './DisplayName/reducer';

//here all reducers is stored
const rootReducer = combineReducers({
  LoginReducer,
  ErrorReducer,
  DisplayNameReducer
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;