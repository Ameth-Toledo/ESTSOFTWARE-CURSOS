import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad02LinuxComponent } from './actividad02-linux.component';

describe('Actividad02LinuxComponent', () => {
  let component: Actividad02LinuxComponent;
  let fixture: ComponentFixture<Actividad02LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad02LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad02LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
