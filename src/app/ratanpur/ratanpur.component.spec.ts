import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatanpurComponent } from './ratanpur.component';

describe('RatanpurComponent', () => {
  let component: RatanpurComponent;
  let fixture: ComponentFixture<RatanpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatanpurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatanpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
