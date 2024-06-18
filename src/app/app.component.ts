import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private scroller: ViewportScroller) {}


  ngOnInit(): void {
    this.scroller.scrollToAnchor('home');
  }
  
}