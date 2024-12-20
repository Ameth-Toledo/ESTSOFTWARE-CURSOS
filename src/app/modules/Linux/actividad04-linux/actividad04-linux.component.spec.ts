import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad04LinuxComponent } from './actividad04-linux.component';

describe('Actividad04LinuxComponent', () => {
  let component: Actividad04LinuxComponent;
  let fixture: ComponentFixture<Actividad04LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad04LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad04LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
