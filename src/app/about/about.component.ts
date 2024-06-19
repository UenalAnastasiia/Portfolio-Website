import { Component, OnInit } from '@angular/core';
import { MouseOverService } from '../services/mouse-over.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public service: MouseOverService) { }

  ngOnInit(): void {
  }
}