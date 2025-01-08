import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDevelopersComponent } from './card-developers.component';

describe('CardDevelopersComponent', () => {
  let component: CardDevelopersComponent;
  let fixture: ComponentFixture<CardDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
