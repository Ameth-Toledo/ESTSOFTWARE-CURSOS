import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersDevelopersComponent } from './banners-developers.component';

describe('BannersDevelopersComponent', () => {
  let component: BannersDevelopersComponent;
  let fixture: ComponentFixture<BannersDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
