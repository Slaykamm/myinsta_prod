import { 
    SET_IS_EMAIL_COMFRIMED, 
    SET_IS_PHONE_COMFRIMED
} from "../../constants/constants"

const initialState = 
    {
    isEmailCOnfirmed: false,
    isPhoneConfirmed: false,
    }

function setUserConfirmationsReducer(state=initialState, action) {
    switch (action.type){

        case SET_IS_EMAIL_COMFRIMED:

            return {...state, isEmailCOnfirmed: true}

        case SET_IS_PHONE_COMFRIMED:

            return {...state, isPhoneConfirmed: true}

        default:
            return state
}
    
}

export default setUserConfirmationsReducer