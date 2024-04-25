import { SET_ERROR, SET_IS_ERROR } from "./types";

function setError(error){
    return{
        type: SET_ERROR,
        payload: error
    }
}

function setIsError(is_error){
    return{
        type: SET_IS_ERROR,
        payload: is_error
    }
}

export {setError,setIsError}