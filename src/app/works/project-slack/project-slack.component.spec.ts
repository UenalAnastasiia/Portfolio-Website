import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSlackComponent } from './project-slack.component';

describe('ProjectSlackComponent', () => {
  let component: ProjectSlackComponent;
  let fixture: ComponentFixture<ProjectSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
