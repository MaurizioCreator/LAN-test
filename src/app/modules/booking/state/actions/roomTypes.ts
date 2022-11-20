import {createAction, props} from '@ngrx/store';
import {RoomType} from '../../models';
import {HttpErrorResponse} from '@angular/common/http';


export const loadRoomTypes = createAction('[RoomTypes] load room types');
export const loadRoomTypesSuccess = createAction('[RoomTypes] load room types success', props<{types: RoomType[]}>());
export const loadRoomTypesError = createAction('[RoomTypes] load room types error', props<{error: HttpErrorResponse}>());

