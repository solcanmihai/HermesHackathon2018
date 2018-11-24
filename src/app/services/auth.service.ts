import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_PATH = 'http://192.168.166.159:5000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = null;

  constructor(
    private http: HttpClient
  ) {
  }

  setToken(token){
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
  }

  getToken(){
    if(this.token){
      return this.token;
    }
    let token = localStorage.getItem('token');
    if(token){
      this.token = token;
      return this.token;
    }
    return null;
  }

  isLoggedIn(){
    if(this.getToken()) {
      return true;
    }
    return false;
  }

  login(email, password){
    let body = {
      email,
      password
    }

    this.http.post(API_PATH + '/login', body).subscribe(data => {
      this.setToken(data['token'])
    })
  }
}
