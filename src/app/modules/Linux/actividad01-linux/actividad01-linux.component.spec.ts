import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad01LinuxComponent } from './actividad01-linux.component';

describe('Actividad01LinuxComponent', () => {
  let component: Actividad01LinuxComponent;
  let fixture: ComponentFixture<Actividad01LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad01LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad01LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
