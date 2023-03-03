import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCtrackComponent } from './project-ctrack.component';

describe('ProjectCtrackComponent', () => {
  let component: ProjectCtrackComponent;
  let fixture: ComponentFixture<ProjectCtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCtrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
