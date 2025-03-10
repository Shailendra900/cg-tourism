import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhoramdeoComponent } from './bhoramdeo.component';

describe('BhoramdeoComponent', () => {
  let component: BhoramdeoComponent;
  let fixture: ComponentFixture<BhoramdeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhoramdeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhoramdeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
