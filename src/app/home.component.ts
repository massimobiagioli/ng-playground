import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
    externalVar: string;

    constructor() {
      this.externalVar = "zzzz";
    }

    onNotify(message: string): void {
      this.externalVar = message;
    }
}
