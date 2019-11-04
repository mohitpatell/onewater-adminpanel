import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCandidateJobsComponent } from './single-candidate-jobs.component';

describe('SingleCandidateJobsComponent', () => {
  let component: SingleCandidateJobsComponent;
  let fixture: ComponentFixture<SingleCandidateJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCandidateJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCandidateJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
