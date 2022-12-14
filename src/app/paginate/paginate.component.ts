import { Component, OnInit } from '@angular/core';
import { PastrieService } from '../services/pastrie.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  constructor(private pastrieService: PastrieService) { }

  p:any;
  ngOnInit(){
  }
}
