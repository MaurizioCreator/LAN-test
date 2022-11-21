import {Validators} from '@angular/forms';

export const LIST_VALIDATORS_COUNT_OF_GUESTS = [
    Validators.required,
    Validators.pattern('[0-6]{1}'),
    Validators.min(1),
    Validators.max(6)
];
