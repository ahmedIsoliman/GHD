import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { NavService } from '../../../shared/services/nav.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2 seconds
      //params: { timing: 3}
    }))])
  ]
})
export class AdminLayoutComponent {

  public right_side_bar: boolean;
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;

  constructor(public navServices: NavService) { }

  public getRouterOutletState(outlet: any) {
    setTimeout(() => {
      return outlet.isActivated ? outlet.activatedRoute : '';
    }, 0);
  }

  public rightSidebar($event: any) {
    this.right_side_bar = $event
  }

  public clickRtl(val: any) {
    if (val === 'RTL') {
      document.body.className = 'rtl';
      this.layoutClass = true;
      this.layoutType = 'LTR';
    } else {
      document.body.className = '';
      this.layoutClass = false;
      this.layoutType = 'RTL';
    }
  }
}
