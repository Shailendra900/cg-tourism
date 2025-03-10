import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamparanyaComponent } from './champaranya.component';

describe('ChamparanyaComponent', () => {
  let component: ChamparanyaComponent;
  let fixture: ComponentFixture<ChamparanyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamparanyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamparanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
