import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsLayoutComponent } from './components/projects-layout/projects-layout.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';



@NgModule({
  declarations: [
    ProjectsLayoutComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
