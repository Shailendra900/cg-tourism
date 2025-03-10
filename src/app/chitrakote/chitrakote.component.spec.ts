import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitrakoteComponent } from './chitrakote.component';

describe('ChitrakoteComponent', () => {
  let component: ChitrakoteComponent;
  let fixture: ComponentFixture<ChitrakoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitrakoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitrakoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
