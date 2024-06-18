import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openImprint() {
    this.dialog.open(ImprintComponent);
  }
}
