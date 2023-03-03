import { Component, OnInit } from '@angular/core';
import { MouseOverService } from '../../services/mouse-over.service';

@Component({
  selector: 'app-project-ctrack',
  templateUrl: './project-ctrack.component.html',
  styleUrls: ['./project-ctrack.component.scss', '../responsive.scss']
})
export class ProjectCtrackComponent implements OnInit {

  constructor(public mouseService: MouseOverService) { }

  ngOnInit(): void {
  }

}
