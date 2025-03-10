import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaipurComponent } from './raipur.component';

describe('RaipurComponent', () => {
  let component: RaipurComponent;
  let fixture: ComponentFixture<RaipurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaipurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaipurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
