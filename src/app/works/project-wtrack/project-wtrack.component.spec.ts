import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWtrackComponent } from './project-wtrack.component';

describe('ProjectWtrackComponent', () => {
  let component: ProjectWtrackComponent;
  let fixture: ComponentFixture<ProjectWtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWtrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
