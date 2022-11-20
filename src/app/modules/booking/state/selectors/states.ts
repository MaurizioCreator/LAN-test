import * as routerSelectors from '@navigation/state';
import {BookingFormState, RoomTypeState} from '../reducers/states';
import {createFeatureSelector} from '@ngrx/store';


export const RoomTypesFeatureName = 'roomTypes';

export interface AppState extends routerSelectors.AppState {
        roomTypes: RoomTypeState;
}

export const selectFeature = createFeatureSelector<AppState, RoomTypeState>(RoomTypesFeatureName);


export const BookingFormFeatureName = 'bookingForm';

export interface AppBookingState extends routerSelectors.AppState {
    bookingForm: BookingFormState;
}

export const selectBookingFeature = createFeatureSelector<AppBookingState, BookingFormState>(BookingFormFeatureName);
