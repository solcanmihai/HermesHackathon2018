import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  description = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  handleClick(){
    this.dataService.sendHelpRequest(this.description).subscribe(data => {
      console.log(data);
    })
  }

}
