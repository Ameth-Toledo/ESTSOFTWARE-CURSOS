import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionLinuxComponent } from './documentacion-linux.component';

describe('DocumentacionLinuxComponent', () => {
  let component: DocumentacionLinuxComponent;
  let fixture: ComponentFixture<DocumentacionLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacionLinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacionLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
