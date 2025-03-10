import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalaComponent } from './tala.component';

describe('TalaComponent', () => {
  let component: TalaComponent;
  let fixture: ComponentFixture<TalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
