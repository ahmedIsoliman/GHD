import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './services/nav.service';
import { WINDOW_PROVIDERS } from './services/windows.service';
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';



@NgModule({
  declarations: [
    ToggleFullscreenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  exports: [
    CommonModule,
    ToggleFullscreenDirective,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  providers: [NavService, WINDOW_PROVIDERS]
})
export class SharedModule { }
