import { Component, OnInit } from '@angular/core';
import { MouseOverService } from 'src/app/services/mouse-over.service';

@Component({
  selector: 'app-project-slack',
  templateUrl: './project-slack.component.html',
  styleUrls: ['./project-slack.component.scss', '../responsive.scss']
})
export class ProjectSlackComponent implements OnInit {

  constructor(public mouseService: MouseOverService) { }

  ngOnInit(): void {
  }

}
