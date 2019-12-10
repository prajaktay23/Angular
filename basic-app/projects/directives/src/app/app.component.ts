import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isPara = false

  mobs = [
    'Android', 'Apple', 'Moto', 'BB'
  ]

  onOkay(){
    this.isPara = !this.isPara
  }
}
