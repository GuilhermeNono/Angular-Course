import { Animal } from './../Animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals:Animal[], animal: Animal) {
    return animals.filter(f => f.name !== animal.name);
  }
}
