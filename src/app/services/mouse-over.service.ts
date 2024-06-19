import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseOverService {
  linkURL: string;
  linkImg: string;
  showLinkDialog: boolean = false;
  name: string;

  constructor(private scroller: ViewportScroller) { }


  showLinkbyMouseOver(link: string, img: string, name: string) {
    this.showLinkDialog = true;
    this.linkURL = link;
    this.linkImg = img;
    this.name = name;
  }


  scrollToComponent(element: string) {
    this.scroller.scrollToAnchor(`${element}`);
  }
}
