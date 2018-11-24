import {Component} from '@angular/core';
import {MedicDashboardComponent} from './medic-dashboard.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: MedicDashboardComponent) {}

}
