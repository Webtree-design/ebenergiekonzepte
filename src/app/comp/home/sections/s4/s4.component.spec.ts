import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Component } from './s4.component';

describe('S4Component', () => {
  let component: S4Component;
  let fixture: ComponentFixture<S4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S4Component]
    });
    fixture = TestBed.createComponent(S4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
