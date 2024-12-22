import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad01HtmlComponent } from './actividad01-html.component';

describe('Actividad01HtmlComponent', () => {
  let component: Actividad01HtmlComponent;
  let fixture: ComponentFixture<Actividad01HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad01HtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad01HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
