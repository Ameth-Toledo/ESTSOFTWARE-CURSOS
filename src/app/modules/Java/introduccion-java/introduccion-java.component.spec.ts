import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionJavaComponent } from './introduccion-java.component';

describe('IntroduccionJavaComponent', () => {
  let component: IntroduccionJavaComponent;
  let fixture: ComponentFixture<IntroduccionJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduccionJavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
