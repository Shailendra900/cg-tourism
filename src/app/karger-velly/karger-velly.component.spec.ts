import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KargerVellyComponent } from './karger-velly.component';

describe('KargerVellyComponent', () => {
  let component: KargerVellyComponent;
  let fixture: ComponentFixture<KargerVellyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KargerVellyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KargerVellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
