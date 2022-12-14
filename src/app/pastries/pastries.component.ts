import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../models/pastrie';
import { PastrieService } from '../services/pastrie.service';
import { TagColorPipe } from '../pipes/tag-color.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  pastries: Pastrie[];
  tags: string[];
  selectedPastry: Pastrie
  p:any;
  constructor(private pastrieService: PastrieService, private route: Router) {
    this.pastries = this.pastrieService.getPastries();
    this.tags = this.pastrieService.getTags();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  addPastry(){
    this.route.navigate(['pastrie-add'])
  }

  selectPastry(pastrie: Pastrie){
    this.selectedPastry = pastrie;
    this.route.navigate(['pastrie', pastrie.id])
  }

  filter(tag){
    let pastries: Pastrie[] = this.pastrieService.getPastries()
    let newPastries: Pastrie[] = []
    pastries.forEach(pastrie => {
      if(pastrie.tags && pastrie.tags.includes(tag, 0)){
        newPastries.push(pastrie);
      }
    })
    console.log(newPastries)
    this.pastries = newPastries;
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
