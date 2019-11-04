import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBlogComponent } from './approved-blog.component';

describe('ApprovedBlogComponent', () => {
  let component: ApprovedBlogComponent;
  let fixture: ComponentFixture<ApprovedBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
