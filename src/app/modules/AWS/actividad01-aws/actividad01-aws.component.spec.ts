import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad01AwsComponent } from './actividad01-aws.component';

describe('Actividad01AwsComponent', () => {
  let component: Actividad01AwsComponent;
  let fixture: ComponentFixture<Actividad01AwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad01AwsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad01AwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
