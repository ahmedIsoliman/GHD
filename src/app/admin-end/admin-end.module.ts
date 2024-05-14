import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEndRoutingModule } from './admin-end-routing.module';
import { FooterComponent } from './components/admin-layout/layout-components/footer/footer.component';
import { HeaderComponent } from './components/admin-layout/layout-components/header/header.component';
import { SidebarComponent } from './components/admin-layout/layout-components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/admin-layout/layout-components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/admin-layout/layout-components/right-sidebar/right-sidebar.component';
import { FeatherIconsComponent } from './components/admin-layout/layout-components/feather-icons/feather-icons.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UserHomeComponent } from './components/admin-home/user-home.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    FeatherIconsComponent,
    UserHomeComponent
  ],
  imports: [
    AdminEndRoutingModule,
    SharedModule
  ]
})
export class AdminEndModule { }
