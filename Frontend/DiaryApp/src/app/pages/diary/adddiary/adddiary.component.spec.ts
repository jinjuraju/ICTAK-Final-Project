import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiaryComponent } from './adddiary.component';

describe('AdddiaryComponent', () => {
  let component: AdddiaryComponent;
  let fixture: ComponentFixture<AdddiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
