import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployerComponent } from './edit-employer.component';

describe('EditEmployerComponent', () => {
  let component: EditEmployerComponent;
  let fixture: ComponentFixture<EditEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
