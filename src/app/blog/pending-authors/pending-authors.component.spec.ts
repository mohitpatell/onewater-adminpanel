import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuthorsComponent } from './pending-authors.component';

describe('PendingAuthorsComponent', () => {
  let component: PendingAuthorsComponent;
  let fixture: ComponentFixture<PendingAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
