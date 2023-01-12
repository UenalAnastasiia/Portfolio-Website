import { Component, OnInit } from '@angular/core';
import { MouseOverService } from 'src/app/services/mouse-over.service';

@Component({
  selector: 'app-project-crm',
  templateUrl: './project-crm.component.html',
  styleUrls: ['./project-crm.component.scss', '../responsive.scss']
})
export class ProjectCrmComponent implements OnInit {

  constructor(public mouseService: MouseOverService) { }

  ngOnInit(): void {}

}
