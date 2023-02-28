import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  name = '';
  names:string[] = []

  constructor(){}

  insertInNamesArray() {
    if(this.name !== ''){
      this.names.push(this.name);
    }
    this.name = '';
  }

  clear() {
    this.names = [];
  }
}
