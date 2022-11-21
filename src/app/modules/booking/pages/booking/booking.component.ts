import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RoomTypeId} from '../../models';
import {ApiService} from '../../services';
import {Store} from '@ngrx/store';
import * as selectors from '@booking/state/selectors';
import * as actions from '@booking/state/actions';
import * as constants from '@booking/constants';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html'
})

export class BookingComponent {
    inputsInfo = this.Api.getInputInfo();
    notSent: boolean;
    lockCountInput: boolean;
    lockCheckbox: boolean;
    maxValueGuests: number;
    roomTypes$ = this.store$.select(selectors.getRoomTypes);
    bookingForm: FormGroup;

    constructor(
        private store$: Store,
        private Api: ApiService,
    ) {
        this.store$.dispatch(actions.initBookingPage());
        this.store$.select(selectors.selectNotSent).subscribe(res => this.notSent = res);
        this.store$.select(selectors.selectLockCountInput).subscribe(res => this.lockCountInput = res);
        this.store$.select(selectors.selectLockCheckbox).subscribe(res => this.lockCheckbox = res);
        this.bookingForm = new FormGroup({
            firstName: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(constants.USER_NAME_REGULAR_EXPRESSION)
                ]),
            lastName: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(constants.USER_NAME_REGULAR_EXPRESSION)
                ]),
            patronymicName: new FormControl('',
                Validators.pattern(constants.USER_NAME_REGULAR_EXPRESSION)
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
                    Validators.max(6),
                    Validators.maxLength(1)
                ]),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
            withAnimal: new FormControl(false)
        });
    }

    setCountOfGuests(): void {
        this.store$.dispatch(actions.setLockCountInput({lockCountInput: false}));
        this.store$.dispatch(actions.setLockCheckbox({lockCheckbox: false}));
        this.bookingForm.patchValue({countOfGuests: null});
        this.bookingForm.controls.countOfGuests.clearValidators();
        switch (this.bookingForm.value.roomType) {
            case RoomTypeId.SINGLE_ROOM: {
                this.bookingForm.patchValue({countOfGuests: 1});
                this.store$.dispatch(actions.setLockCountInput({lockCountInput: true}));
                break;
            }
            case RoomTypeId.STANDARD_DOUBLE_ROOM: {
                this.maxValueGuests = 2;
                this.bookingForm.controls.countOfGuests.setValidators([...constants.LIST_VALIDATORS_COUNT_OF_GUESTS, Validators.max(2)]);
                break;
            }
            case RoomTypeId.FAMILY_ROOM: {
                this.maxValueGuests = 4;
                this.bookingForm.controls.countOfGuests.setValidators([...constants.LIST_VALIDATORS_COUNT_OF_GUESTS, Validators.max(4)]);
                break;
            }
            case RoomTypeId.TWO_ROOM: {
                this.maxValueGuests = 6;
                this.bookingForm.controls.countOfGuests.setValidators([...constants.LIST_VALIDATORS_COUNT_OF_GUESTS, Validators.max(6)]);
                break;
            }
            case RoomTypeId.SUITE_DOUBLE_ROOM: {
                this.maxValueGuests = 2;
                this.bookingForm.controls.countOfGuests.setValidators([...constants.LIST_VALIDATORS_COUNT_OF_GUESTS, Validators.max(2)]);
                this.bookingForm.patchValue({withAnimal: false});
                this.store$.dispatch(actions.setLockCheckbox({lockCheckbox: true}));
                break;
            }
        }
        this.bookingForm.controls.countOfGuests.updateValueAndValidity();
    }

    submit(): void {
        this.store$.dispatch(actions.setNotSent({notSent: false}));
        if (this.bookingForm.status === 'INVALID') {
            console.log('Форма не корректна');
            return;
        } else {
            console.log('Data:', this.Api.createBooking(this.bookingForm.value));
            this.store$.dispatch(actions.setNotSent({notSent: true}));
            this.bookingForm.reset();
            this.store$.dispatch(actions.setLockCountInput({lockCountInput: false}));
            this.store$.dispatch(actions.setLockCheckbox({lockCheckbox: false}));
        }
    }
}
