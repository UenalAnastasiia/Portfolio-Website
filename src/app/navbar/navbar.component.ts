import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() init: boolean;
  @Output() opened = new EventEmitter<any>();

  active = false;

  ngOnInit() {
    this.active = this.init || false;
  }

  menuToogle() {
    this.active = !this.active;
    this.opened.emit();
  }
}
