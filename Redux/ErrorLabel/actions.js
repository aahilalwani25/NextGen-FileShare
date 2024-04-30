import { SET_EMAIL_ERROR } from "./types";

function setEmailError(is_error,error){
    return{
        type: SET_EMAIL_ERROR,
        payload: {
            is_error,error
        }
    }
}

export {setEmailError}