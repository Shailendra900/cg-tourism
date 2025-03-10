import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirpurComponent } from './sirpur.component';

describe('SirpurComponent', () => {
  let component: SirpurComponent;
  let fixture: ComponentFixture<SirpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SirpurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
