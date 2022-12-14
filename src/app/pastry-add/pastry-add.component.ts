import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../models/pastrie';
import { PastrieService } from '../services/pastrie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastry-add',
  templateUrl: './pastry-add.component.html',
  styleUrls: ['./pastry-add.component.scss']
})
export class PastryAddComponent implements OnInit {

  public pastrie = {} as Pastrie
  constructor(private pastrieService: PastrieService, private route: Router) {
  }

  ngOnInit(): void {
    this.pastrieService

    
  }

  addPastry(){
    this.pastrieService.putPastrie(this.pastrie);
    this.route.navigate([''])
  }

}
