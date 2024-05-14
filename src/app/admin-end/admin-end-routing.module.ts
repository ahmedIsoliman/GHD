import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UserHomeComponent } from './components/admin-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: UserHomeComponent,
        data: {
          title: "Dashboard",
          breadcrumb: "Dashboard"
        }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'tickets',
        loadChildren: () => import('./modules/tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEndRoutingModule { }
