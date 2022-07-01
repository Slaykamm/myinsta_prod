import { createSelector } from "reselect"
import { get } from 'lodash'

export const getFormValues = (state) => get(state, ['form', 'RegistrationForm', 'values'])


export const getEmailFromFormValues = createSelector(
    getFormValues,
    (formValues) => formValues?.regEmail
    
)