import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComandosComponent } from './card-comandos.component';

describe('CardComandosComponent', () => {
  let component: CardComandosComponent;
  let fixture: ComponentFixture<CardComandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComandosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
