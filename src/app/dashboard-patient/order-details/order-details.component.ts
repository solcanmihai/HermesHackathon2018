import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GMapModule} from 'primeng/primeng';   
declare var google: any;
import { DataService } from 'src/app/services/data.service';
import { interval, Subscription} from 'rxjs';
import { Socket } from 'ngx-socket-io';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private socket: Socket
  ) {
  }

  dataLoaded = false;
  order;
  id;
  options: any;
  subscription: Subscription;

  medicPosition;

  overlays: any[];

  getData(){
    this.dataService.getOrderById(this.id).subscribe(data => {
      console.log(data);
      this.order = data;
      this.dataLoaded = true;
    })
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['userId']
        this.getData();
      });
      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };

      this.overlays = [
        // new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
        // new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      ];
      this.listenForAccept();
      this.getMedicPosition();
      this.listenForDiagnosted();
  }

  getMedicPosition(){
    this.socket.on("location", value => {
      if(value['user_id'] == this.order['medic_id']){
        this.medicPosition = value;
        this.overlays.push(new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}));
      }
    })
  }

  listenForDiagnosted(){
    this.socket.on("diagnostic", value => {
      console.log('Asta este')
      console.log(value)
        
      if(value['emergency_id'] == this.id){
        this.getData();
      }
    })
  }

  listenForAccept(){
    this.socket.on("message", value => {
      if(value['delete'] && value['emergency_id'] == this.id){
        console.log('should update');
        this.getData();
      }
    })
  }

}
