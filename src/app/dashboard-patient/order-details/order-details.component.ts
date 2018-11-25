import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GMapModule} from 'primeng/primeng';   
declare var google: any;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

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
