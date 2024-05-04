import { initialState } from "./state";
import { SET_CONNECTION, SET_ONLINE_CLIENTS } from "./types";

export function DashboardReducer(state= initialState, action){
    switch(action.type){
        case SET_CONNECTION:
            return {...state, isConnected: action.payload};
        case SET_ONLINE_CLIENTS:
            return {...state, onlineClients: action.payload};
        default:
            return state;
    }
}