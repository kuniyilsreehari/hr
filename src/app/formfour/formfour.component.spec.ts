import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfourComponent } from './formfour.component';

describe('FormfourComponent', () => {
  let component: FormfourComponent;
  let fixture: ComponentFixture<FormfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
