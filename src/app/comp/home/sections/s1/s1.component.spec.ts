import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1Component } from './s1.component';

describe('S1Component', () => {
  let component: S1Component;
  let fixture: ComponentFixture<S1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S1Component]
    });
    fixture = TestBed.createComponent(S1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
