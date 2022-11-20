import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

const userNameRegExp = '^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$';

@Injectable()
export class FormControlService {
    controls: { [key: string]: AbstractControl; };
    constructor() {
        this.controls = {
            firstName: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(userNameRegExp)
                ]),
            lastName: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(userNameRegExp)
                ]),
            patronymicName: new FormControl('',
                Validators.pattern(userNameRegExp)
            ),
            birthday: new FormControl(''),
            roomType: new FormControl(null,
                Validators.required
            ),
            countOfGuests: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern('[0-6]{1}'),
                    Validators.min(1),
                    Validators.maxLength(1)
                ]),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
            withAnimal: new FormControl(false)
        };
    }

    GetBookingControls(): { [key: string]: AbstractControl; } {
        return this.controls;
    }
}
