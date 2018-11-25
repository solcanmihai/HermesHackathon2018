import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(
    private authService: AuthService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.email = ''
    this.password = ''
  }

  blurMail(event){
    if(this.email == ''){
      event.target.classList.remove('ui-state-filled');
    }
    else{
      event.target.classList.add('ui-state-filled');
    }
  }

  blurPass(event){
    if(this.password == ''){
      event.target.classList.remove('ui-state-filled');
    }
    else{
      event.target.classList.add('ui-state-filled');
    }
  }

  handleLogin(){
    console.log('Hello')
    this.authService.login(this.email, this.password);
    if(this.email == 'medic@yahoo.com'){
      this.router.navigateByUrl('/medic-dashboard');
    }
    else{
      this.router.navigateByUrl('/patient-dashboard');
    }
  }

}
