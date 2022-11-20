import {RoomType} from '../../models';


export interface RoomTypeState {
    types: RoomType[];
}

export const initialRoomTypesState: RoomTypeState = {
    types: [],
};

export interface BookingFormState {
    notSent: boolean;
    lockCountInput: boolean;
    lockCheckbox: boolean;
}

export const initialBookingFormState: BookingFormState = {
    notSent: true,
    lockCheckbox: false,
    lockCountInput: false,
};
