import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiaryComponent } from './viewdiary.component';

describe('ViewdiaryComponent', () => {
  let component: ViewdiaryComponent;
  let fixture: ComponentFixture<ViewdiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
