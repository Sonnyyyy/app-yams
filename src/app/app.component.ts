import { Component, OnInit } from '@angular/core';
import { Pastrie } from './models/pastrie';
import { PastrieService } from './services/pastrie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-yams';
  titlePage: string = "Page principale: liste des patisseries"
  pastries: Pastrie[];
  constructor(private pastrieService: PastrieService) {
    this.pastries = this.pastrieService.getPastries();
  }

  ngOnInit(){
  }

  search(event){
    let pastries: Pastrie[] = this.pastrieService.getPastries();
    let newPastries: Pastrie[] = []
    pastries.forEach(pastrie => {
      if(pastrie.name.toLowerCase().includes(event.target.value.toLowerCase())){
        newPastries.push(pastrie);
      }
    })
    this.pastries = newPastries;
  }
}
