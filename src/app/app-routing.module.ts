import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestEndLayoutComponent } from './guest-end/guest-end-layout/guest-end-layout.component';
import { NotFoundComponent } from './guest-end/not-found/not-found.component';

import { TranslateService } from '@ngx-translate/core';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings, ManualParserLoader } from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings
) {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    ['en', 'ar'],
    'ROUTES.'
  );
}

const routes: Routes = [
  {
    path: '',
    component: GuestEndLayoutComponent,
    loadChildren: () =>
      import('./guest-end/guest-end.module').then((mod) => mod.GuestEndModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-end/admin-end.module').then((mod) => mod.AdminEndModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: createTranslateLoader,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
