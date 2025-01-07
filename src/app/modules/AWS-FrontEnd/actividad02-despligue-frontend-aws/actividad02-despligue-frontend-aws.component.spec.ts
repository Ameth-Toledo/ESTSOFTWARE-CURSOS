import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad02DespligueFrontendAwsComponent } from './actividad02-despligue-frontend-aws.component';

describe('Actividad02DespligueFrontendAwsComponent', () => {
  let component: Actividad02DespligueFrontendAwsComponent;
  let fixture: ComponentFixture<Actividad02DespligueFrontendAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad02DespligueFrontendAwsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad02DespligueFrontendAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
