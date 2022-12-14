import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastryDetailsComponent } from './pastry-details/pastry-details.component';
import { TagColorPipe } from './pipes/tag-color.pipe';
import { DoThingDirective } from './directives/do-thing.directive';
import { PastryAddComponent } from './pastry-add/pastry-add.component';
import { FormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';
import {NgxPaginationModule} from 'ngx-pagination';

const pastriesRoutes: Routes = [
  {
    path: '',
    component: PastriesComponent
  },
  {
    path: 'pastrie-add',
    component: PastryAddComponent
  },
  {
    path: 'pastrie/:id',
    component: PastryDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastryDetailsComponent,
    TagColorPipe,
    DoThingDirective,
    PastryAddComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(pastriesRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
