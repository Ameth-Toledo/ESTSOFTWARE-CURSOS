import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad03LinuxComponent } from './actividad03-linux.component';

describe('Actividad03LinuxComponent', () => {
  let component: Actividad03LinuxComponent;
  let fixture: ComponentFixture<Actividad03LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad03LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad03LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
