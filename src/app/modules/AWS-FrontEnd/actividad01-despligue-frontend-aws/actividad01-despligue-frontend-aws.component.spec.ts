import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad01DespligueFrontendAwsComponent } from './actividad01-despligue-frontend-aws.component';

describe('Actividad01DespligueFrontendAwsComponent', () => {
  let component: Actividad01DespligueFrontendAwsComponent;
  let fixture: ComponentFixture<Actividad01DespligueFrontendAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad01DespligueFrontendAwsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad01DespligueFrontendAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
