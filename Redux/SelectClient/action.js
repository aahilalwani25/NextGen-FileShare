import { SET_DOCUMENT_TO_BE_SENT, SET_SELECTED_CLIENT } from "./types";

function setSelectedClient(clientSocketID){
    return{
        type: SET_SELECTED_CLIENT,
        payload: clientSocketID
    }
}

function setDocumentToBeSent(documentToBeSent){
    return{
        type: SET_DOCUMENT_TO_BE_SENT,
        payload: documentToBeSent
    }
}

export {setDocumentToBeSent, setSelectedClient}

