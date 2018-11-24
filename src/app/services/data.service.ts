import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

const API_PATH = 'http://192.168.166.171:5000';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  sendHelpRequest(description, lat, long){
    let token = this.authService.getToken();
    let body = {
      token,
      description,
      lat,
      long
    }
    return this.http.post(API_PATH + '/emergency', body);
  }


  getOrdersHistory(){
    let token = this.authService.getToken();
    let body = {
      token
    }
    return this.http.post(API_PATH + '/getEmergencies', body);
  }
}
