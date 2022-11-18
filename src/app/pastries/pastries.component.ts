import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../models/pastrie';
import { PastrieService } from '../services/pastrie.service';
import { TagColorPipe } from '../pipes/tag-color.pipe';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  @Input() pastries: Pastrie[];
  tags: string[];
  selectedPastry: Pastrie
  constructor(private pastrieService: PastrieService) {
    this.tags = this.pastrieService.getTags();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  selectPastry(pastrie: Pastrie){
    this.selectedPastry = pastrie;
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
}
