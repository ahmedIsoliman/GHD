import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { GuestEndLayoutComponent } from './guest-end-layout/guest-end-layout.component';

const GUEST_ROUTES: Routes = [
  {
    path: '',
    component: GuestEndLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', redirectTo: '', pathMatch: 'full' },
      { path: 'under-construction', component: UnderConstructionComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(GUEST_ROUTES)],
  exports: [RouterModule]
})
export class GuestEndRoutingModule { }
