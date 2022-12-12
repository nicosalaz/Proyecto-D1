import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadeoComponent } from './mercadeo.component';

describe('MercadeoComponent', () => {
  let component: MercadeoComponent;
  let fixture: ComponentFixture<MercadeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
