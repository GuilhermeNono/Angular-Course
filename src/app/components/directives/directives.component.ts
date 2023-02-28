import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  font = 'Arial';

  classOne = 'teste-teste'

  allClasses = ['teste', 'teste-teste', 'teste-teste-teste']

  underline = 'underline'

}
