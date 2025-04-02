import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmFifthPartComponent } from './algoritm-fifth-part.component';

describe('AlgoritmFifthPartComponent', () => {
  let component: AlgoritmFifthPartComponent;
  let fixture: ComponentFixture<AlgoritmFifthPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoritmFifthPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritmFifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
