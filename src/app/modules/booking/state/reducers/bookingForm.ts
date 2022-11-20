import {on} from '@ngrx/store';
import * as actions from '../actions/bookingForm';
import {BookingFormState} from './states';


export const BOOKING_FORM_REDUCERS = [
    on(actions.getBookingFormState, (state: BookingFormState) => ({...state})),
    on(actions.setNotSent, (state: BookingFormState, {notSent}) => ({...state, notSent})),
    on(actions.setLockCountInput, (state: BookingFormState, {lockCountInput}) => ({...state, lockCountInput})),
    on(actions.setLockCheckbox, (state: BookingFormState, {lockCheckbox}) => ({...state, lockCheckbox}))
];
