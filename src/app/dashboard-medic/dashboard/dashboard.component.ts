import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { interval, Subscription} from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  lat = null;
  long = null;
  subscription: Subscription;

  
  constructor(
    private dataService: DataService,
    private socket: Socket,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const source = interval(10000/2);
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


    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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
        console.log(value)
    })}

//   getMessage() {
//     return this.socket
//         .fromEvent("message")
//         .map( data => console.log(data['message']));
// }

}
