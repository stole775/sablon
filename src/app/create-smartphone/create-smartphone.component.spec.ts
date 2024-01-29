import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSmartphoneComponent } from './create-smartphone.component';

describe('CreateSmartphoneComponent', () => {
  let component: CreateSmartphoneComponent;
  let fixture: ComponentFixture<CreateSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSmartphoneComponent]
    });
    fixture = TestBed.createComponent(CreateSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
