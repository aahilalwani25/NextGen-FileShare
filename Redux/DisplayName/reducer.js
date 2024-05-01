import { initialState } from "./state";
import { SET_NAME } from "./types";

export function DisplayNameReducer(state= initialState, action){
    switch(action.type){
        case SET_NAME:
            return{...state, name: action.payload};
        default:
            return state;
    }
}