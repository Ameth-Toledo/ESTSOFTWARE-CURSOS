import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionHtmlComponent } from './introduccion-html.component';

describe('IntroduccionHtmlComponent', () => {
  let component: IntroduccionHtmlComponent;
  let fixture: ComponentFixture<IntroduccionHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduccionHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
