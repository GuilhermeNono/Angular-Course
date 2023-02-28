import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {

  myNumber = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);
  }

}
