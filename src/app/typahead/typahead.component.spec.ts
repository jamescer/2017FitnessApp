import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypaheadComponent } from './typahead.component';

describe('TypaheadComponent', () => {
  let component: TypaheadComponent;
  let fixture: ComponentFixture<TypaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
