export interface RoomType {
    id: RoomTypeId;
    name: string;
}

export enum RoomTypeId{
    SINGLE_ROOM = 0,
    STANDARD_DOUBLE_ROOM = 1,
    FAMILY_ROOM = 2,
    TWO_ROOM = 3,
    SUITE_DOUBLE_ROOM = 4
}
