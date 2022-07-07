import { createSelector } from "reselect"
import { get } from 'lodash'

export const getFormValues = (state) => get(state, ['form', 'RegistrationForm', 'values'])


export const getEmailFromFormValues = createSelector(
    getFormValues,
    (formValues) => formValues?.regEmail
)

export const getPhoneFromFormValues = createSelector(
    getFormValues,
    (formValues) => formValues?.regPhone
)

export const getDictFromState = (state) => state.usersDict

export const getRegistrationButtonState = (state) => state.setUserConfirmationsReducer
export const getIsRegistrationButtonEnabled = createSelector(
    getRegistrationButtonState,
    (registrationButtonState) => {
        if (registrationButtonState.isEmailCOnfirmed && registrationButtonState.isPhoneConfirmed) {
            return true
        }
        else { 
            return false
        }
    }
)