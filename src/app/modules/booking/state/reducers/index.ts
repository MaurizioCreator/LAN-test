import {Action, createReducer} from '@ngrx/store';
import {BookingFormState, initialBookingFormState, initialRoomTypesState, RoomTypeState} from './states';
import {ROOM_TYPES_REDUCERS} from './roomTypes';
import {BOOKING_FORM_REDUCERS} from './bookingForm';


const BookingReducer = createReducer(
  initialRoomTypesState,
    ...ROOM_TYPES_REDUCERS,
);

const BookingFormReducer = createReducer(
    initialBookingFormState,
    ...BOOKING_FORM_REDUCERS,
);

export function reducer(state: RoomTypeState, action: Action) {
    return BookingReducer(state, action);
}

export function bookingReducer(state: BookingFormState, action: Action) {
    return BookingFormReducer(state, action);
}
