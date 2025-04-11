import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForAllComponent } from './header-for-all.component';

describe('HeaderForAllComponent', () => {
  let component: HeaderForAllComponent;
  let fixture: ComponentFixture<HeaderForAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderForAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
