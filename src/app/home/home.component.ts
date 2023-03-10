import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MouseOverService } from '../services/mouse-over.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './circle.scss']
})
export class HomeComponent implements OnInit {

  constructor(public mouseService: MouseOverService, private scroller: ViewportScroller) { }


  ngOnInit(): void { }


  scrollToComponent() {
    this.scroller.scrollToAnchor('aboutme');
  }
}