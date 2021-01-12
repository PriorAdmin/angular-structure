import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2InfoComponent } from './tab2-info.component';

describe('Tab2InfoComponent', () => {
  let component: Tab2InfoComponent;
  let fixture: ComponentFixture<Tab2InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab2InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
