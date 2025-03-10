import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawaparaComponent } from './nawapara.component';

describe('NawaparaComponent', () => {
  let component: NawaparaComponent;
  let fixture: ComponentFixture<NawaparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NawaparaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NawaparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
