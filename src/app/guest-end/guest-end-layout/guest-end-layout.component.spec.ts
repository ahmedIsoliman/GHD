import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestEndLayoutComponent } from './guest-end-layout.component';

describe('GuestEndLayoutComponent', () => {
  let component: GuestEndLayoutComponent;
  let fixture: ComponentFixture<GuestEndLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestEndLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestEndLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
