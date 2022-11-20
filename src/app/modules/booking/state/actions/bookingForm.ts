import {createAction, props} from '@ngrx/store';



export const getBookingFormState = createAction('[BookingForm] get booking from state');
export const setNotSent = createAction('[BookingForm] set notSent', props<{notSent: boolean}>());
export const setLockCountInput = createAction('[BookingForm] set lock count input', props<{lockCountInput: boolean}>());
export const setLockCheckbox = createAction('[BookingForm] set lock checkbox', props<{lockCheckbox: boolean}>());
