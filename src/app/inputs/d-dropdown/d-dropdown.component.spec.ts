import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDropdownComponent } from './d-dropdown.component';

describe('DDropdownComponent', () => {
  let component: DDropdownComponent;
  let fixture: ComponentFixture<DDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
