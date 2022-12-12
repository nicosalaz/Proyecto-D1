import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesMercadeoComponent } from './reportes-mercadeo.component';

describe('ReportesMercadeoComponent', () => {
  let component: ReportesMercadeoComponent;
  let fixture: ComponentFixture<ReportesMercadeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesMercadeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesMercadeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
