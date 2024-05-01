import {initialState} from './state';
import {SET_EMAIL_ERROR} from './types';

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        is_error: action.payload.is_error,
      };
    }
    // case SET_IS_ERROR:{
    //     return {...state, is_error: action.payload};
    // }
    default:
      return state;
  }
}
