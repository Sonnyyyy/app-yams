import { Injectable } from '@angular/core';
import { PASTRIES, INGREDIENTS_LISTS, TAGS } from './../mock-pastries';
import { Pastrie } from './../models/pastrie';
import { List } from './../models/list';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  public pastries: Pastrie[] = PASTRIES
  public list: List[] = INGREDIENTS_LISTS
  public tags: string[] = TAGS
  constructor() { }

  getPastries(): Pastrie[] {
    return this.pastries;
  }

  getPastrie(id): Pastrie {
    return this.pastries[id];
  }

  putPastrie(pastrie: Pastrie){
    this.pastries.push(pastrie);
  }

  getIngredientsLists(): List[] {
    return this.list;
  }

  getIngredientsList(id): List {
    return this.list[id];
  }

  getTags(): string[] {
    return this.tags;
  }

  getTag(id): string {
    return this.tags[id];
  }
}
