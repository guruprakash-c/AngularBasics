import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreloader } from './page-preloader';

describe('PagePreloader', () => {
  let component: PagePreloader;
  let fixture: ComponentFixture<PagePreloader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePreloader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePreloader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
