import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppControlDynamicComponent } from './app-control-dynamic.component';

describe('AppControlDynamicComponent', () => {
  let component: AppControlDynamicComponent;
  let fixture: ComponentFixture<AppControlDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppControlDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppControlDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
