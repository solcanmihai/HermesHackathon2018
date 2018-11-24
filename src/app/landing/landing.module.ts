import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        component: LandingComponent, path: ''
      },
      {
        component: LoginComponent, path: 'login'
      }
    ]),
    FormsModule
  ],
  declarations: [LandingComponent, LoginComponent]
})
export class LandingModule { }
