import {createSelector} from '@ngrx/store';
import {selectFeature} from './states';

export const getRoomTypes = createSelector(
    selectFeature,
        state => state.types
);
