import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad01Component } from './actividad01.component';

describe('Actividad01Component', () => {
  let component: Actividad01Component;
  let fixture: ComponentFixture<Actividad01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
