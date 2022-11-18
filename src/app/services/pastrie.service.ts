import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS, TAGS } from './../mock-pastries';
import { Pastrie } from './../models/pastrie';
import { List } from './../models/list';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  constructor() { }

  getPastries(): Pastrie[] {
    return PASTRIES;
  }

  getPastrie(id): Pastrie {
    return PASTRIES[id];
  }

  getIngredientsLists(): List[] {
    return INGREDIENTS_LISTS;
  }

  getIngredientsList(id): List {
    return INGREDIENTS_LISTS[id];
  }

  getTags(): string[] {
    return TAGS;
  }

  getTag(id): string {
    return TAGS[id];
  }
}
