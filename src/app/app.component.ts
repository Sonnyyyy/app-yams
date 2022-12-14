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
  constructor() {  }

  ngOnInit(){
  }
}
