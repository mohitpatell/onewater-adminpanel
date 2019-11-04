import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobCandidatesComponent } from './single-job-candidates.component';

describe('SingleJobCandidatesComponent', () => {
  let component: SingleJobCandidatesComponent;
  let fixture: ComponentFixture<SingleJobCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJobCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJobCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
