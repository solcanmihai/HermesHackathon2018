import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { interval, Subscription} from 'rxjs';
import { Socket } from 'ngx-socket-io';
import 'rxjs/add/operator/map';
import { identifierModuleUrl } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  lat = null;
  long = null;
  subscription: Subscription;

  pendingOrders;
  
  constructor(
    private dataService: DataService,
    private socket: Socket,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getPendingOrders().subscribe(data => {
      this.pendingOrders = data;
    })
    const source = interval(10000/2);
    this.removeAccepted();
    this.subscription = source.subscribe(val => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude
          this.long = position.coords.longitude
          this.sendMessage()
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
    this.getMessage();
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }

  removeAccepted(){
    this.socket.on("message", value => {
      if(value['delete']){
        this.pendingOrders = this.pendingOrders.filter(x => {
          return x['emergency_id'] != value['emergency_id']
        })
        console.log(value);
      }
    })
  }

  sendMessage(){
    let body = {
      lat: this.lat,
      long: this.long,
      token: this.authService.getToken()
    }

    this.socket.emit("location", body);
    //console.log(body)
  }

  getMessage() {
    return this.socket.on("message", value => {

      if(value['delete']){
        return;
      }
      this.pendingOrders.push(value);
    })}

  acceptOrder(order){
    let emergency_id = order['emergency_id'];
    this.socket.emit("message", {emergency_id, token: this.authService.getToken()})
    this.router.navigateByUrl('/medic-dashboard/medicOrder/' + emergency_id);
  }

  removeFromList(order){
    this.pendingOrders = this.pendingOrders.filter(x => {
      return x != order
    })
  }

//   getMessage() {
//     return this.socket
//         .fromEvent("message")
//         .map( data => console.log(data['message']));
// }

}
