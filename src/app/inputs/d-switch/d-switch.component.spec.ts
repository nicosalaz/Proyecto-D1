import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSwitchComponent } from './d-switch.component';

describe('DSwitchComponent', () => {
  let component: DSwitchComponent;
  let fixture: ComponentFixture<DSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
