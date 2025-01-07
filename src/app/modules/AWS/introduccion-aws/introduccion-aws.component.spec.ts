import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionAwsComponent } from './introduccion-aws.component';

describe('IntroduccionAwsComponent', () => {
  let component: IntroduccionAwsComponent;
  let fixture: ComponentFixture<IntroduccionAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduccionAwsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
