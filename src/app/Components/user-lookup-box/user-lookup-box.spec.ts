import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookupBox } from './user-lookup-box';

describe('UserLookupBox', () => {
  let component: UserLookupBox;
  let fixture: ComponentFixture<UserLookupBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLookupBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLookupBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
