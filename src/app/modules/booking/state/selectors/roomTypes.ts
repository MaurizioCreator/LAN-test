import {createSelector} from '@ngrx/store';
import {selectBookingModuleState} from '../index';

export const selectRoomTypesState = createSelector(
    selectBookingModuleState,
        state => state.roomTypes
);

export const getRoomTypes = createSelector(
    selectRoomTypesState,
        state => state.types
);
