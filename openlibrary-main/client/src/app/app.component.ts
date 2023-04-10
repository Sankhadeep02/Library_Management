import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar = false;
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.showSidebar = this.screenWidth >= 755;

  }

  constructor() {
    this.screenWidth = window.innerWidth;
    this.showSidebar = this.screenWidth >= 755;
  }
}
