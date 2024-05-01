import { SET_NAME } from "./types";

export function setName(name){
    return{
        type: SET_NAME,
        payload: name
    }
}