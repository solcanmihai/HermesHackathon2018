import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
@NgModule({
  imports: [
    ChartModule,
    FormsModule ,
    CommonModule,
    RouterModule.forRoot([
      {
        component: LandingComponent, path: ''
      },
      {
        component: LoginComponent, path: 'login'
      }
    ]),
  ],
  declarations: [LandingComponent, LoginComponent]
})
export class LandingModule { }
