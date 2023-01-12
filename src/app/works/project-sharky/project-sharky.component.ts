import { Component, OnInit } from '@angular/core';
import { MouseOverService } from 'src/app/services/mouse-over.service';

@Component({
  selector: 'app-project-sharky',
  templateUrl: './project-sharky.component.html',
  styleUrls: ['./project-sharky.component.scss', '../responsive.scss']
})
export class ProjectSharkyComponent implements OnInit {

  constructor(public mouseService: MouseOverService) { }

  ngOnInit(): void {
  }

}
