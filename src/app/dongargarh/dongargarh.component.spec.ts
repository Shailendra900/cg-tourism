import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongargarhComponent } from './dongargarh.component';

describe('DongargarhComponent', () => {
  let component: DongargarhComponent;
  let fixture: ComponentFixture<DongargarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DongargarhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongargarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
