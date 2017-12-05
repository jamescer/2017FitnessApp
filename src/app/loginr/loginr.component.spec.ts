import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrComponent } from './loginr.component';

describe('LoginrComponent', () => {
  let component: LoginrComponent;
  let fixture: ComponentFixture<LoginrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
