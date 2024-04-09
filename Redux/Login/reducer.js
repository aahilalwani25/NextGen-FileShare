import { initialState } from "./state";
import { SET_EMAIL, SET_PASSWORD } from "./types";

export default function LoginReducer(state= initialState, action){
    switch(action.type){
        case SET_EMAIL:
            return {...state,email: action.payload};
        case SET_PASSWORD:
            return {...state, password:action.payload};
        default:
            return state;
    }
}