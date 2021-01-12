import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3InfoComponent } from './tab3-info.component';

describe('Tab3InfoComponent', () => {
  let component: Tab3InfoComponent;
  let fixture: ComponentFixture<Tab3InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab3InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
