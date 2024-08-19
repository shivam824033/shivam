import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimageComponent } from './editimage.component';

describe('EditimageComponent', () => {
  let component: EditimageComponent;
  let fixture: ComponentFixture<EditimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
