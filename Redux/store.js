import {combineReducers, createStore} from 'redux';
import LoginReducer from './Login/reducer';
import { ErrorReducer } from './ErrorLabel/reducer';

//here all reducers is stored
const rootReducer = combineReducers({
  LoginReducer,
  ErrorReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;