import { initialState } from "./states";
import { SET_DOCUMENT_TO_BE_SENT, SET_SELECTED_CLIENT } from "./types";

export default function SelectClientReducer(state= initialState, actions){

    switch(actions.type){

        case SET_SELECTED_CLIENT:
            return {...state, selectedClientSocketID: actions.payload};
        case SET_DOCUMENT_TO_BE_SENT:
            return {...state, document: actions.payload};
        default:
            return state;
    }
}