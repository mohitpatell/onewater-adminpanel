import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyJobsComponent } from './single-company-jobs.component';

describe('SingleCompanyJobsComponent', () => {
  let component: SingleCompanyJobsComponent;
  let fixture: ComponentFixture<SingleCompanyJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
