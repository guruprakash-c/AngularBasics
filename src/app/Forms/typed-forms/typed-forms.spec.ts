import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedForms } from './typed-forms';

describe('TypedForms', () => {
  let component: TypedForms;
  let fixture: ComponentFixture<TypedForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
