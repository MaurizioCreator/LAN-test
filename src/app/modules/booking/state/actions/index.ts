import {createAction} from '@ngrx/store';

export * from './roomTypes';
export * from './bookingForm';

export const empty = createAction('[bookingModule] empty');
export const initBookingPage = createAction('[bookingModule] init booking page');
