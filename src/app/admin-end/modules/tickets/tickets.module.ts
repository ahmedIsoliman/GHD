import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsLayoutComponent } from './components/tickets-layout/tickets-layout.component';



@NgModule({
  declarations: [
    TicketsLayoutComponent,
    TicketsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
