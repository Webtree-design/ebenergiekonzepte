import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiper2Component } from './swiper2.component';

describe('Swiper2Component', () => {
  let component: Swiper2Component;
  let fixture: ComponentFixture<Swiper2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Swiper2Component]
    });
    fixture = TestBed.createComponent(Swiper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
