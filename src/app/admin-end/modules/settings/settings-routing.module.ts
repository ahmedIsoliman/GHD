import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
        data: {
          title: "Settings",
          breadcrumb: "Settings"
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: "Profile",
          breadcrumb: "Profile"
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
