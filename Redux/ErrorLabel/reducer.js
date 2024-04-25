import { initialState } from "./state";
import { SET_ERROR, SET_IS_ERROR } from "./types";

export function ErrorReducer(state= initialState, action){
    switch(action.type){
        case SET_ERROR:{
            return {...state, error: action.payload};
        }
        case SET_IS_ERROR:{
            return {...state, is_error: action.payload};
        }
        default:
            return state;
    }
}