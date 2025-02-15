import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmQuarterPartComponent } from './algoritm-quarter-part.component';

describe('AlgoritmQuarterPartComponent', () => {
  let component: AlgoritmQuarterPartComponent;
  let fixture: ComponentFixture<AlgoritmQuarterPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoritmQuarterPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritmQuarterPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
