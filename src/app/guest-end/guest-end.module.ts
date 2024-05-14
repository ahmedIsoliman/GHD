import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestEndRoutingModule } from './guest-end-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { GuestEndLayoutComponent } from './guest-end-layout/guest-end-layout.component';



@NgModule({
  declarations: [
    GuestEndLayoutComponent,
    LoginComponent,
    NotFoundComponent,
    UnderConstructionComponent
  ],
  imports: [
    GuestEndRoutingModule,
    SharedModule
  ]
})
export class GuestEndModule { }
