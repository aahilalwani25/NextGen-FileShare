import { SET_CONNECTION, SET_ONLINE_CLIENTS } from "./types";

export function setConnection(isConnected){
    return {
        type: SET_CONNECTION,
        payload: isConnected
    }
}

export function setOnlineClients(onlineClients){
    return {
        type: SET_ONLINE_CLIENTS,
        payload: onlineClients
    }
}