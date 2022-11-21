import {Component, Input} from '@angular/core';
import { InputModel } from '@shared/models';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    @Input() props: InputModel;
    @Input() hiddeError: boolean;
    @Input() notRequired: boolean;
}
