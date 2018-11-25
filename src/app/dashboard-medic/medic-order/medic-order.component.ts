import { Component, OnInit } from '@angular/core';
import {GMapModule} from 'primeng/primeng';   
import { interval, Subscription} from 'rxjs';
import { Socket } from 'ngx-socket-io';
import 'rxjs/add/operator/map';
declare var google: any;

@Component({
  selector: 'app-medic-order',
  templateUrl: './medic-order.component.html',
  styleUrls: ['./medic-order.component.css']
})


export class MedicOrderComponent implements OnInit {

  constructor(
    private socket: Socket
  ) { }

  text: any

  options: any;

  overlays: any[];

  ngOnInit() {


      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };

      this.overlays = [
        new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
        new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      ];
  }

}
