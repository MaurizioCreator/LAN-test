import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../services/api.service';
import {Store} from '@ngrx/store';
import * as actions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class BookingPageEffects {
    constructor(
        private actions$: Actions,
        private store$: Store,
        private api: ApiService
    ) {
    }

    loadRoomTypes$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadRoomTypes),
        switchMap(() => this.api.getRoomTypes().pipe(
            map(types => actions.loadRoomTypesSuccess({types})),
            catchError(error => of(actions.loadRoomTypesError({error})))
        ))
    ));
}
