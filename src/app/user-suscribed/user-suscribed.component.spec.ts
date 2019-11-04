import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuscribedComponent } from './user-suscribed.component';

describe('UserSuscribedComponent', () => {
  let component: UserSuscribedComponent;
  let fixture: ComponentFixture<UserSuscribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSuscribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSuscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
