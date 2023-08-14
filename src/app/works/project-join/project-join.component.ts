import { Component, OnInit } from '@angular/core';
import { MouseOverService } from 'src/app/services/mouse-over.service';

@Component({
  selector: 'app-project-join',
  templateUrl: './project-join.component.html',
  styleUrls: ['./project-join.component.scss', '../responsive.scss']
})
export class ProjectJoinComponent implements OnInit {

  constructor(public mouseService: MouseOverService) { }

  ngOnInit(): void {
  }

}
