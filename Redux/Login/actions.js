import { SET_BUTTON_PRESSED, SET_EMAIL, SET_PASSWORD } from "./types"

function setEmail(email){
    return{
        type:SET_EMAIL,
        payload:email
    }
}

function setPassword(password){
    return{
        type:SET_PASSWORD,
        payload:password
    }
}

function setButtonPressed(buttonPressed){
    return{
        type:SET_BUTTON_PRESSED,
        payload:buttonPressed
    }
}

export {setButtonPressed,setEmail,setPassword};