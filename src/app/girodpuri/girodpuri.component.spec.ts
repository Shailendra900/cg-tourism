import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirodpuriComponent } from './girodpuri.component';

describe('GirodpuriComponent', () => {
  let component: GirodpuriComponent;
  let fixture: ComponentFixture<GirodpuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirodpuriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirodpuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
