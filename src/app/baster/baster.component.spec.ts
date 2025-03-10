import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasterComponent } from './baster.component';

describe('BasterComponent', () => {
  let component: BasterComponent;
  let fixture: ComponentFixture<BasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
