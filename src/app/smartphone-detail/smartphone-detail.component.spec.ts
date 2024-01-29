import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneDetailComponent } from './smartphone-detail.component';

describe('SmartphoneDetailComponent', () => {
  let component: SmartphoneDetailComponent;
  let fixture: ComponentFixture<SmartphoneDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneDetailComponent]
    });
    fixture = TestBed.createComponent(SmartphoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
