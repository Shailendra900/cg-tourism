import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadkuDeepComponent } from './madku-deep.component';

describe('MadkuDeepComponent', () => {
  let component: MadkuDeepComponent;
  let fixture: ComponentFixture<MadkuDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadkuDeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadkuDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
