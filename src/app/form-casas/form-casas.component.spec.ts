import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCasasComponent } from './form-casas.component';

describe('FormCasasComponent', () => {
  let component: FormCasasComponent;
  let fixture: ComponentFixture<FormCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
