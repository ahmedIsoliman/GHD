import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsLayoutComponent } from './components/projects-layout/projects-layout.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsLayoutComponent,
    children: [
      {
        path: '',
        component: ProjectsListComponent,
        data: {
          title: "Projects",
          breadcrumb: "Projects"
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
