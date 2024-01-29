import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmartphoneComponent } from './edit-smartphone.component';

describe('EditSmartphoneComponent', () => {
  let component: EditSmartphoneComponent;
  let fixture: ComponentFixture<EditSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSmartphoneComponent]
    });
    fixture = TestBed.createComponent(EditSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
