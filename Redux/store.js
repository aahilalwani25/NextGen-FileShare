import {combineReducers, createStore} from 'redux';
import LoginReducer from './Login/reducer';
import ErrorReducer from './Error/reducer';
import { DisplayNameReducer } from './DisplayName/reducer';
import { DashboardReducer } from './Dashboard/reducer';
import SelectClientReducer from './SelectClient/reducer';

//here all reducers is stored
const rootReducer = combineReducers({
  LoginReducer,
  ErrorReducer,
  DisplayNameReducer,
  DashboardReducer,
  SelectClientReducer
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;