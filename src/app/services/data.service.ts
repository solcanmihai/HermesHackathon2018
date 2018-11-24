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

  sendHelpRequest(description){
    let token = this.authService.getToken();
    let body = {
      token,
      description
    }
    return this.http.post(API_PATH + '/emergency', body);

  }
}
