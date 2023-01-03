import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseOverService {
  linkURL: string;
  linkImg: string;
  showLinkDialog: boolean = false;
  name: string;

  constructor() { }


  showLinkbyMouseOver(link: string, img: string, name: string) {
    this.showLinkDialog = true;
    this.linkURL = link;
    this.linkImg = img;
    this.name = name;
  }
}
