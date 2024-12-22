import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad02HtmlComponent } from './actividad02-html.component';

describe('Actividad02HtmlComponent', () => {
  let component: Actividad02HtmlComponent;
  let fixture: ComponentFixture<Actividad02HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad02HtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad02HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
