import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionAlgoritmsComponent } from './introduction-algoritms.component';

describe('IntroductionAlgoritmsComponent', () => {
  let component: IntroductionAlgoritmsComponent;
  let fixture: ComponentFixture<IntroductionAlgoritmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionAlgoritmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionAlgoritmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
