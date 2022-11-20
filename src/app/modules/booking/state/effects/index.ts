import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as actions from '../actions';
import {switchMapTo} from 'rxjs/operators';
import {BookingPageEffects} from './booking';

@Injectable()

export class BookingEffects {
    constructor(private actions$: Actions) {}

    initBookingPage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.initBookingPage),
        switchMapTo([
            actions.loadRoomTypes(),
        ])
    ));
}

export const EFFECTS = [
    BookingEffects,
    BookingPageEffects
];
