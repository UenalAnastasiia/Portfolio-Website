import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWorksComponent } from './portfolio-works.component';

describe('PortfolioWorksComponent', () => {
  let component: PortfolioWorksComponent;
  let fixture: ComponentFixture<PortfolioWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
