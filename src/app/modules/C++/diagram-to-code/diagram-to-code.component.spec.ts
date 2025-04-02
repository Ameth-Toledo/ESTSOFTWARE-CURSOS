import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramToCodeComponent } from './diagram-to-code.component';

describe('DiagramToCodeComponent', () => {
  let component: DiagramToCodeComponent;
  let fixture: ComponentFixture<DiagramToCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramToCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramToCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
