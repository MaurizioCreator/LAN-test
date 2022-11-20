import {createAction} from '@ngrx/store';

export * from './roomTypes';
export * from './bookingForm';

export const empty = createAction('[roomTypes] empty');
export const initBookingPage = createAction('[roomTypes] init booking page');
