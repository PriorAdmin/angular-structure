import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1InfoComponent } from './tab1-info.component';

describe('Tab1InfoComponent', () => {
  let component: Tab1InfoComponent;
  let fixture: ComponentFixture<Tab1InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
