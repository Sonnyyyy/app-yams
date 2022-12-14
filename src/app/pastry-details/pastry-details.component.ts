import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../models/pastrie';
import { List } from '../models/list';
import { PastrieService } from '../services/pastrie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pastry-details',
  templateUrl: './pastry-details.component.html',
  styleUrls: ['./pastry-details.component.scss']
})
export class PastryDetailsComponent implements OnInit {

  pastrie: Pastrie
  lists: List[];
  list: List;
  ingredients: string[]
  sort: boolean = false;
  constructor(private pastrieService: PastrieService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPastrie()
  }

  async getPastrie(){
    const pastrieId = await this.activatedRoute.snapshot.paramMap.get('id')
    console.log(pastrieId)
    this.pastrie = this.pastrieService.getPastrie(pastrieId);
    this.lists = this.pastrieService.getIngredientsLists();
    this.lists.forEach(list => {
      if(list.id == this.pastrie.id){
        this.list = list
        this.ingredients = list.list
      }
    });
  }

  addIngredient(event){
    this.ingredients.push(event.target.value);
    event.target.value = "";
  }

  removeIngredient(event){
    this.ingredients.splice(+event.target.id.replace('delete',''), 1);
  }

  sortIngredient(event){
    if(this.sort){
      this.ingredients.reverse();
      event.target.innerHTML = "Ordre Croissant";
      this.sort = false;
      console.log(this.activatedRoute.snapshot.paramMap)
    } 
    else{
      this.ingredients.sort();
      event.target.innerHTML = "Ordre Décroissant";
      this.sort = true;
    }
  }

  hideIngredient(event){
    document.getElementById(event.target.id).parentElement.parentElement.parentElement.style.display = "none";
  }

  goBack(){
    this.route.navigate([''])
  }
}
