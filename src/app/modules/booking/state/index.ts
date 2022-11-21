import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {bookingFormReducer, roomTypesReducer} from './reducers';
import {BookingFormState, RoomTypeState} from './reducers/states';
import * as routerSelectors from '@navigation/state';

export interface BookingModuleState {
    roomTypes: RoomTypeState;
    bookingForm: BookingFormState;
}

export interface ModuleState extends routerSelectors.AppState{
    bookingModule: BookingModuleState;
}

export const reducers = {
    roomTypes: roomTypesReducer,
    bookingForm: bookingFormReducer,
};

export const BookingModuleFeatureName = 'bookingModule';

export const selectBookingModuleState = createFeatureSelector<ModuleState, BookingModuleState>(BookingModuleFeatureName);
