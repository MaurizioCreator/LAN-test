import {ActionReducerMap} from '@ngrx/store';
import {bookingReducer, reducer} from './reducers';

export const reducers: ActionReducerMap<any> = {
    roomTypes: reducer,
    bookingForm: bookingReducer,
};

