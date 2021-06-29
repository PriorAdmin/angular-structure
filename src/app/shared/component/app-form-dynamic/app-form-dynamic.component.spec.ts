import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormDynamicComponent } from './app-form-dynamic.component';

describe('AppFormDynamicComponent', () => {
  let component: AppFormDynamicComponent;
  let fixture: ComponentFixture<AppFormDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
