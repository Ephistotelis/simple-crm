import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradddialogComponent } from './useradddialog.component';

describe('UseradddialogComponent', () => {
  let component: UseradddialogComponent;
  let fixture: ComponentFixture<UseradddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseradddialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseradddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
