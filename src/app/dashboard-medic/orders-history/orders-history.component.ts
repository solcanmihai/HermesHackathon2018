import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  orders

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrdersHistory().subscribe(data => {
      this.orders = data;
      console.log(data);
    })
  }

}
