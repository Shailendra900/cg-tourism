import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangrelComponent } from './gangrel.component';

describe('GangrelComponent', () => {
  let component: GangrelComponent;
  let fixture: ComponentFixture<GangrelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GangrelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GangrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
