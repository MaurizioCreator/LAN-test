import {createSelector} from '@ngrx/store';
import {selectBookingFeature} from './states';

export const getNotSent = createSelector(
    selectBookingFeature,
    state => state.notSent
);

export const getLookCountInput = createSelector(
    selectBookingFeature,
        state => state.lockCountInput
);

export const getLookCheckbox = createSelector(
    selectBookingFeature,
        state => state.lockCheckbox
);
