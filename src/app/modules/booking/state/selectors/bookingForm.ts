import {createSelector} from '@ngrx/store';
import {selectBookingModuleState} from '../index';


export  const selectBookingFormState = createSelector(
    selectBookingModuleState,
        state => state.bookingForm
);

export const selectNotSent = createSelector(
    selectBookingFormState,
    state => state.notSent
);

export const selectLockCountInput = createSelector(
    selectBookingFormState,
        state => state.lockCountInput
);

export const selectLockCheckbox = createSelector(
    selectBookingFormState,
        state => state.lockCheckbox
);
