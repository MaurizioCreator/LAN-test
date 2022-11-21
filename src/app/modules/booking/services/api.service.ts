import {Injectable} from '@angular/core';
import {BookingServicesModule} from '../booking-services.module';
import {Booking, RoomType, RoomTypeId, ValuesOfControls} from '../models';
import {Observable, of} from 'rxjs';
import {InputModel} from '../../shared/models';


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

    getInputInfo(): InputModel[] {
        return [
            {
                id: 'input_first_name',
                title: 'Введите имя',
                notValidTitle: 'Некорректные данные',
            },
            {
                id: 'input_last_name',
                title: 'Введите фамилию',
                notValidTitle: 'Некорректные данные',
            },
            {
                id: 'input_patronymic_name',
                title: 'Введите Отчество',
                notValidTitle: 'Некорректные данные',
            },
            {
                id: 'input_birthday',
                title: 'Введите дату рождения',
                notValidTitle: 'Некорректные данные',
            },
            {
                id: 'count_of_guests',
                title: ' Введите количество гостей',
                notValidTitle: ' Некорректное количество гостей для данного типа номера',
            },
            {
                id: 'input_start_date',
                title: ' Выберите дату заезда',
                notValidTitle: ' Заполните поле',
            },
            {
                id: 'input_end_date',
                title: 'Выберите дату выезда',
                notValidTitle: 'Заполните поле',
            },
        ];

    }
}
