import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getOrdersHistory().subscribe(data => {
      this.orders = data;
      console.log(data);
    })
  }

}
