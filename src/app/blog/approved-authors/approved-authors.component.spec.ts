import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedAuthorsComponent } from './approved-authors.component';

describe('ApprovedAuthorsComponent', () => {
  let component: ApprovedAuthorsComponent;
  let fixture: ComponentFixture<ApprovedAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
