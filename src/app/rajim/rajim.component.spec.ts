import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajimComponent } from './rajim.component';

describe('RajimComponent', () => {
  let component: RajimComponent;
  let fixture: ComponentFixture<RajimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RajimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
