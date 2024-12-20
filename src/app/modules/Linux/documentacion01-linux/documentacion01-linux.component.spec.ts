import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentacion01LinuxComponent } from './documentacion01-linux.component';

describe('Documentacion01LinuxComponent', () => {
  let component: Documentacion01LinuxComponent;
  let fixture: ComponentFixture<Documentacion01LinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documentacion01LinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documentacion01LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
