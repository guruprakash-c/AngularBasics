import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogposts } from './blogposts';

describe('Blogposts', () => {
  let component: Blogposts;
  let fixture: ComponentFixture<Blogposts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogposts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogposts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
