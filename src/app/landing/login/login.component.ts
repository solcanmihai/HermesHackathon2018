import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('Hello')
    this.authService.login(this.email, this.password);
  }

}
