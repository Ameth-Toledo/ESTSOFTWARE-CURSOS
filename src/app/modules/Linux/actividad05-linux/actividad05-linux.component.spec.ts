import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad05LinuxComponent } from './actividad05-linux.component';

describe('Actividad05LinuxComponent', () => {
  let component: Actividad05LinuxComponent;
  let fixture: ComponentFixture<Actividad05LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad05LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad05LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
