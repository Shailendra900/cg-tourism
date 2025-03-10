import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarkantakComponent } from './amarkantak.component';

describe('AmarkantakComponent', () => {
  let component: AmarkantakComponent;
  let fixture: ComponentFixture<AmarkantakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmarkantakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmarkantakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
