import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentDialogComponentComponent } from './add-content-dialog-component.component';

describe('AddContentDialogComponentComponent', () => {
  let component: AddContentDialogComponentComponent;
  let fixture: ComponentFixture<AddContentDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContentDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
