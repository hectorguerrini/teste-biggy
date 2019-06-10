import { Component, OnInit } from '@angular/core';
import { Lanterna } from './models/lanterna';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'biggy-teste';
  lanterna: Lanterna;

  constructor() {}

  ngOnInit() {
    this.lanterna = new Lanterna();
  }
}
