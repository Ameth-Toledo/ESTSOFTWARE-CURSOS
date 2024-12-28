import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmSecondPartComponent } from './algoritm-second-part.component';

describe('AlgoritmSecondPartComponent', () => {
  let component: AlgoritmSecondPartComponent;
  let fixture: ComponentFixture<AlgoritmSecondPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoritmSecondPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritmSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
