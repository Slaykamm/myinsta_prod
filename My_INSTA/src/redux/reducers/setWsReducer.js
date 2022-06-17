import { SET_WS } from "../../constants/constants"

const initialState = []
//{id: '', date: '', authorId: '', authorName: '', content: ''}


function setWsReducer(state=initialState, action) {
    switch (action.type){

        case SET_WS:

            return action.payload
        default:
            return state
    }
    
}

export default setWsReducer