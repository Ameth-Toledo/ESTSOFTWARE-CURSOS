import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad06LinuxComponent } from './actividad06-linux.component';

describe('Actividad06LinuxComponent', () => {
  let component: Actividad06LinuxComponent;
  let fixture: ComponentFixture<Actividad06LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad06LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad06LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
