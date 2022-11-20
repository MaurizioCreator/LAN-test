import {Injectable} from '@angular/core';
import {BookingServicesModule} from '../booking-services.module';
import {Booking, RoomType, RoomTypeId, ValuesOfControls} from '../models';
import {Observable, of} from 'rxjs';


@Injectable({
    providedIn: BookingServicesModule
})

export class ApiService {
    constructor() {
    }
    createBooking(obj: ValuesOfControls): Booking {
        return {
            roomTypedId: obj.roomType,
            countOfGuests: obj.countOfGuests,
            startDate: obj.startDate,
            endDate: obj.endDate,
            withAnimal: obj.withAnimal,
            user: {
                firstName: obj.firstName,
                lastName: obj.lastName,
                patronymicName: obj.patronymicName,
                birthday: obj.birthday
            },
        };
    }
    getRoomTypes(): Observable<RoomType[]> {
        return of([    {
            id: RoomTypeId.SINGLE_ROOM,
            name: 'Стандарт одноместный'
        },
            {
                id: RoomTypeId.STANDARD_DOUBLE_ROOM,
                name: 'Стандарт двухместный'
            },
            {
                id: RoomTypeId.FAMILY_ROOM,
                name: 'Семейный (до 4-х гостей)'
            },
            {
                id: RoomTypeId.TWO_ROOM,
                name: 'Двухкомнатный (до 6-ти гостей)'
            },

            {
                id: RoomTypeId.SUITE_DOUBLE_ROOM,
                name: 'Люкс двухместный'
            },
        ]);
    }
}
