import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuthorDetailComponent } from './pending-author-detail.component';

describe('PendingAuthorDetailComponent', () => {
  let component: PendingAuthorDetailComponent;
  let fixture: ComponentFixture<PendingAuthorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAuthorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuthorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
