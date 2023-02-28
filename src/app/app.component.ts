import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'gui';
  title = 'aulaone';
  userData = {
    email: 'guilherme.nono@gmail.com',
    role: 'admin'
  }
  teste = 123;
}
