import {on} from '@ngrx/store';
import * as actions from '../actions/roomTypes';
import {RoomTypeState} from './states';


export const ROOM_TYPES_REDUCERS = [
    on(actions.loadRoomTypes, (state: RoomTypeState) => ({...state, types: []})),
    on(actions.loadRoomTypesSuccess, (state: RoomTypeState, {types}) => ({...state, types }))
];
