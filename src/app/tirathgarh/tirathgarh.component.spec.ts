import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirathgarhComponent } from './tirathgarh.component';

describe('TirathgarhComponent', () => {
  let component: TirathgarhComponent;
  let fixture: ComponentFixture<TirathgarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirathgarhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirathgarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
