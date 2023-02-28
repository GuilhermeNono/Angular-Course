import { Animal } from './../../Animal';
import { Component } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animalDetail:string = ''

  animals:Animal[] = [
    {name: 'Frida', type:'dog', age:5},
    {name: 'Lola', type: 'horse', age: 10},
    {name: 'frajola', type: 'cat', age:1}
  ]

  constructor(private listService:ListService){}

  showAnimalDetail(animal:Animal) {
    this.animalDetail = `${animal.name} is a ${animal.type} and have ${animal.age} years old`
  }

  removeAnimal(animal:Animal) {
    this.animals = this.listService.remove(this.animals, animal)
  }

}
