import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTourPlaceComponent } from './all-tour-place.component';

describe('AllTourPlaceComponent', () => {
  let component: AllTourPlaceComponent;
  let fixture: ComponentFixture<AllTourPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTourPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTourPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
