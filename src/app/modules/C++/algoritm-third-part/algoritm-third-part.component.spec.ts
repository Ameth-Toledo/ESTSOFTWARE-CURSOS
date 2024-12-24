import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmThirdPartComponent } from './algoritm-third-part.component';

describe('AlgoritmThirdPartComponent', () => {
  let component: AlgoritmThirdPartComponent;
  let fixture: ComponentFixture<AlgoritmThirdPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoritmThirdPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritmThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
