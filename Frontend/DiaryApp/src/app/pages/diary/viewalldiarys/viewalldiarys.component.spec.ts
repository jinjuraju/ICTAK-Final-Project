import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldiarysComponent } from './viewalldiarys.component';

describe('ViewalldiarysComponent', () => {
  let component: ViewalldiarysComponent;
  let fixture: ComponentFixture<ViewalldiarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalldiarysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalldiarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
