import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import {BookingRoutingModule} from './booking-routing.module';
import {BookingServicesModule} from './booking-services.module';

import {SharedModule} from '../shared/shared.module';

import {PAGES} from './pages';
import {EFFECTS} from './state/effects';
import {StoreModule} from '@ngrx/store';
import {BookingModuleFeatureName, reducers} from './state';


@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,

        EffectsModule.forFeature(EFFECTS),
        StoreModule.forFeature(BookingModuleFeatureName, reducers),
        BookingRoutingModule,
        BookingServicesModule,
        SharedModule,
    ],
    providers: []
})

export class BookingModule { }
