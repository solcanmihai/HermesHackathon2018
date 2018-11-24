import {Component} from '@angular/core';
import {PatientDashboardComponent} from './patient-dashboard.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: PatientDashboardComponent) {}

}
