import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsLayoutComponent } from './components/tickets-layout/tickets-layout.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsLayoutComponent,
    children: [
      {
        path: '',
        component: TicketsListComponent,
        data: {
          title: "Tickets",
          breadcrumb: "Tickets"
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule { }
