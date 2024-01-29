import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneListComponent } from './smartphone-list.component';

describe('SmartphoneListComponent', () => {
  let component: SmartphoneListComponent;
  let fixture: ComponentFixture<SmartphoneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneListComponent]
    });
    fixture = TestBed.createComponent(SmartphoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
