import { Component, OnInit } from '@angular/core';
import {GMapModule} from 'primeng/primeng';   
import { interval, Subscription} from 'rxjs';
import { Socket } from 'ngx-socket-io';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsComponent } from 'src/app/dashboard-patient/order-details/order-details.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/node';
declare var google: any;

@Component({
  selector: 'app-medic-order',
  templateUrl: './medic-order.component.html',
  styleUrls: ['./medic-order.component.css']
})


export class MedicOrderComponent implements OnInit {

  constructor(
    private socket: Socket,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  text: any

  userData;

  orderId;

  options: any;

  overlays: any[];

  orderData;

  ngOnInit() {
      this.overlays = [];

      this.activatedRoute.params.subscribe(params => {
        this.orderId = params['id'];

        this.dataService.getOrderById(this.orderId).subscribe(data => {
          this.orderData = data;

          console.log(data);

          this.options = {
            center: {lat: data['lat'], lng: data['long']},
            zoom: 12
          };
          this.overlays.push(new google.maps.Marker({position: {lat: data['lat'], lng: data['long']}, title:"Pacient"}))
          

          console.log(this.overlays);

          this.dataService.getUserData(data['user_id']).subscribe(userData => {
            this.userData = userData;
          })
        })

      })
  }

  sendDiagnosis(){
    console.log(this.orderId);
    this.socket.emit("diagnostic", {
      diagnosis: this.text,
      emergency_id: this.orderId,
      token: this.authService.getToken()
    })
    setTimeout(() => {
      this.dataService.getOrderById(this.orderId).subscribe(data => {
          this.orderData = data;

          console.log(data);

          this.options = {
            center: {lat: data['lat'], lng: data['long']},
            zoom: 12
          };
          this.overlays.push(new google.maps.Marker({position: {lat: data['lat'], lng: data['long']}, title:"Pacient"}))
          

          console.log(this.overlays);

          this.dataService.getUserData(data['user_id']).subscribe(userData => {
            this.userData = userData;
          })
        })
    }, 1300)
  }

}
